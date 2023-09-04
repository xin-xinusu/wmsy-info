import { StatusCodes } from 'http-status-codes'; // Constants for HTTP status codes
import mongoose from 'mongoose'; // MongoDB object modeling tool
import { createAmenityBodySchema } from './schemas/create'; // Schema for validating the request body
import { serialize } from '../../middleware/serialize'; // Function for serializing the response data
import { getUrlFromMediaKey } from '../../utils/keyUrlS3'; // Function to get URL from media key
import { HandlersErrors } from '../../utils'; // Common error messages
import db from '../../utils/db'; // Database utilities

// Async function to handle creating an amenity
export const createHandler = async (req, res) => {
  try {
    // Validate and extract the name, propertyTypeIds, and media attributes from the request body
    const {
      data: {
        attributes: { name, propertyTypeIds, media },
      },
    } = createAmenityBodySchema.parse(req.body);

    // Create the amenity in the database
    const amenity = await db.Amenity.create({
      name,
      media: {
        url: getUrlFromMediaKey(media[0].key), // Get the URL from the media key
        height: 40, // Set the height of the media
        width: 40, // Set the width of the media
        order: 0, // Set the order of the media
        fileType: media[0].type, // Set the file type of the media
      },
    });

    // Create an array of amenity-propertyType association data
    const amenityPropertyTypeData = propertyTypeIds.map((propertyTypeId) => ({
      amenityId: amenity._id, // Set the amenity ID
      propertyTypeId: mongoose.Types.ObjectId(propertyTypeId), // Convert the propertyType ID to ObjectId
      amenityOrder: 0, // Set the amenity order
    }));

    // Create the amenity-propertyType associations in the database
    await db.AmenityPropertyType.createMany(amenityPropertyTypeData);

    // Find the created amenity and populate the associated property types
    const refreshedAmenity = await db.Amenity.findById(amenity._id).populate({
      path: 'propertyTypes',
      populate: {
        path: 'propertyType',
      },
    });

    // Send a success response with the serialized data of the created amenity
    res
      .status(StatusCodes.OK)
      .send(
        serialize({ data: refreshedAmenity._id, attributes: refreshedAmenity })
      );
  } catch (err) {
    // If an error occurs, log it and send an error response
    console.log('[Amenity] createHandler error: ', err);
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      // If the error is due to an invalid ObjectId, send a not found response
      res
        .status(StatusCodes.NOT_FOUND)
        .send({ message: HandlersErrors.NOT_FOUND });
    }
    // Send an internal server error response
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};
