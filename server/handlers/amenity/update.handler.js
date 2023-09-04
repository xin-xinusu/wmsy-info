const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');
const { parseQueryParam } = require('../../middleware');
const { serialize } = require('../../middleware/serialize');
const { HandlersErrors, updateOneQuery } = require('../../utils');
const { getUrlFromMediaKey } = require('../../utils/keyUrlS3');
const { updateAmenityBodySchema } = require('./schemas/update.schema');
const db = require('../../utils/db');

// Define an async function to handle updating an amenity
const updateHandler = async (req, res) => {
  try {
    // Parse the `id` parameter from the query string
    const { id } = parseQueryParam(updateOneQuery, req);
    // Validate and parse the request body using the `updateAmenityBodySchema`
    const {
      data: {
        attributes: { name, propertyTypeIds, media },
      },
    } = updateAmenityBodySchema.parse(req.body);

    // Convert the `id` into a Mongoose ObjectId
    const objectId = mongoose.Types.ObjectId(id);

    // Delete all previous relationships between the amenity and property types
    await db.AmenityPropertyType.deleteMany({ amenityId: objectId });

    // Create new relationships between the amenity and property types
    const amenityPropertyTypeData = propertyTypeIds.map((propertyTypeId) => ({
      amenityId: objectId,
      propertyTypeId: mongoose.Types.ObjectId(propertyTypeId),
      amenityOrder: 1,
    }));
    await db.AmenityPropertyType.createMany(amenityPropertyTypeData);

    // Update the media associated with the amenity
    const isNewMedia = media.filter(m => "key" in m);
    if (isNewMedia.length > 0) {
      // Create a new media document if there's new media in the request
      const thisAmenity = await db.Amenity.findById(objectId);
      const newMedia = await db.Media.create({
        url: getUrlFromMediaKey(media[0].key),
        height: 40,
        width: 40,
        order: 0,
        fileType: media[0].type,
      });
      // Update the amenity's `mediaId` field to point to the new media document
      await db.Amenity.findByIdAndUpdate(objectId, { mediaId: newMedia._id });
      // Delete the old media document
      await db.Media.findByIdAndDelete(thisAmenity.mediaId);
    }

    // Update the name of the amenity and populate its `propertyTypes` field
    const updatedAmenity = await db.Amenity.findByIdAndUpdate(objectId, { name }, { new: true }).populate({
      path: 'propertyTypes',
      populate: {
        path: 'propertyType',
      },
    });

    // Send a success response with the serialized updated amenity data
    res
      .status(StatusCodes.OK)
      .json(serialize({ data: { id: updatedAmenity._id, attributes: updatedAmenity } }));
  } catch (err) {
    // Log the error
    console.log("[Amenity] updateHandler error", err);
    // Send an INTERNAL_SERVER_ERROR response with the appropriate message
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  updateHandler,
};
