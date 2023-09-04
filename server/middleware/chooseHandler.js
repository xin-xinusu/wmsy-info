import { StatusCodes } from "http-status-codes";
import { HandlersErrors } from "../utils";
import { ValidateRequestInput } from "./validateRequest";

export class ChooseHandlerInput extends ValidateRequestInput {}

export const chooseHandler = (
  req,
  res,
  handlersOptions
) => {
  for (const { method, handler } of handlersOptions) {
    if (req.method === method) {
      return handler(req, res);
    }
  }

  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .send(HandlersErrors.METHOD_NOT_ALLOWED);
  throw new Error("Internal Server Error: Not implemented method");
};
