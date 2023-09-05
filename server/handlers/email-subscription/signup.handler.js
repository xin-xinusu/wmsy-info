import { StatusCodes } from 'http-status-codes'; // Constants for HTTP status codes
import mongoose from 'mongoose'; // MongoDB object modeling tool
import { serialize } from '../../middleware/serialize'; // Function for serializing the response data
import { HandlersErrors } from '../../utils'; // Common error messages
import db from '../../utils/db'; // Database utilities

// Async function to handle creating an subscriber
export const createHandler = async (req, res) => {
  try {
    console.log('req.body :>> ', req.body);
    const exists = await db.Subscriber.findOne({email: req.body.email});
    if(!exists){
      // Create the subscriber in the database
      const subscriber = await db.Subscriber.create({
        email: req.body.email,
        history: [{
          content: 'Signed up'
        }]
      });
      // Send a success response with the serialized data of the created subscriber
      res
      .status(StatusCodes.OK)
      .send(
        serialize({ data: subscriber.email, message: "You are now subscribed" })
      );
    } else { 
      // Send a success response with the serialized data of the created subscriber
      res
      .status(StatusCodes.OK)
      .send(
        serialize({ data: exists.email, message: "You are already subscribed" })
      );
    }    
  } catch (err) {
    // If an error occurs, log it and send an error response
    console.log('[subscriber] createHandler error: ', err);
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
