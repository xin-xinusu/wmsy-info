import { StatusCodes } from "http-status-codes";
import { HandlersErrors } from "../utils";

export const allowMethods = (allowedMethods) => {
  return async (req, res, next) => {
    if (req.method && allowedMethods.includes(req.method)) {
      await next();
      return;
    } else if (req.method == "OPTIONS") {
      res.status(StatusCodes.OK).send("OK");
    } else {
      res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .json({ message: HandlersErrors.METHOD_NOT_ALLOWED });
    }
  };
};
