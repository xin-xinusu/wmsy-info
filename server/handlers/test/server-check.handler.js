// Import DB (with all schemas)
import db from '../../utils/db';
import config from '../../../config.js'

// Import additional helpers and utilies
import { StatusCodes } from "http-status-codes";
import { serialize } from "../../middleware/serialize.js";
import { HandlersErrors } from "../../utils";

export const testHandler = async (req, res) => {
  try {

    const admins = await db.Admin.find();

    // Respond
    res
      // status code
      .status(StatusCodes.OK)
      // return data in json
      .send(
        serialize({
          adminLength: admins.length,
          name: config.name,
          status: {
            live: config.state.isLive,
            mode: config.state.mode
          },
          version: config.version.toFixed(2)
        })
      )

  } catch(err){
    // Log error
    console.log('err :>> ', err);

    res
      // respond with internal server error
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      // return error 
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
}