import { StatusCodes } from 'http-status-codes'; // Constants for HTTP status codes
import mongoose from 'mongoose'; // MongoDB object modeling tool
import { parseQueryParam } from '../../middleware'; // Function to parse query parameters
import { serialize } from '../../middleware/serialize'; // Function for serializing the response data
import { HandlersErrors, deleteOneQuery } from '../../utils'; // Common error messages and utilities
import db from '../../utils/db'; // Database utilities

// Async function to handle deleting an amenity
export const deleteHandler = async (req, res) => {
  try {
    // Parse the ID of the amenity to delete from the query parameters
    const { id } = parseQueryParam(deleteOneQuery, req);
    // Convert the parsed ID to an ObjectId
    const objectId = mongoose.Types.ObjectId(id);

    // Deleting relations between amenity and PropertyType
    await db.AmenityPropertyType.deleteMany({ amenityId: objectId });

    // Find and delete the amenity from the database
    const amenity = await db.Amenity.findByIdAndDelete(objectId);
    // If the amenity has a mediaId, find and delete the media from the database
    if (amenity && amenity.mediaId) {
      await db.Media.findByIdAndDelete(amenity.mediaId);
    }

    // Send a success response with the serialized data of the deleted amenity
    res
      .status(StatusCodes.OK)
      .json(serialize({ data: { id, attributes: amenity } }));
  } catch (err) {
    // If an error occurs, log it and send an error response
    console.log('[Amenity] deleteHandler error', err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};