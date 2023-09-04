import { StatusCodes } from "http-status-codes";
import mongoose from 'mongoose';
import { parseQueryParam } from "../../middleware";
import { serialize } from "../../middleware/serialize";
import { HandlersErrors } from "../../utils";
import { getOneQuery } from "../../utils/schemas";
import * as db from '../../utils/db';

// Define an async function to handle getting a single amenity by ID
const getOneHandler = async (req, res) => {
  try {
    // Parse the `id` parameter from the query string
    const { id } = parseQueryParam(getOneQuery, req);
    
    // Convert the `id` into a Mongoose ObjectId
    const objectId = mongoose.Types.ObjectId(id);

    // Find the amenity by its `objectId` in the database
    // and populate its `propertyTypes` field along with the associated `propertyType`
    const amenity = await db.Amenity.findById(objectId).populate({
      path: 'propertyTypes',
      populate: {
        path: 'propertyType',
      },
    });

    // If the amenity does not exist, throw an error with the message 'Amenity not found'
    if (!amenity) {
      throw new Error('Amenity not found');
    }

    // Send a success response with the serialized amenity data
    res.status(StatusCodes.OK).send(
      serialize({
        data: amenity._id,
        attributes: amenity,
      })
    );
  } catch (err) {
    // Log the error
    console.log("[Amenity] getOneHandler error: ", err);

    // If the error message is 'Amenity not found',
    // send a NOT_FOUND response with the appropriate message
    if (err.message === 'Amenity not found') {
      res
        .status(StatusCodes.NOT_FOUND)
        .send({ message: HandlersErrors.NOT_FOUND });
    } else {
      // Otherwise, send an INTERNAL_SERVER_ERROR response with the appropriate message
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
    }
  }
};

export {
  getOneHandler,
};
