import { label } from "next-api-middleware";
import {
  ValidateRequestInput,
  allowMethods,
  chooseHandler,
  jwtAuth,
  validateRequest,
} from "../../server/middleware";
import { HTTP_METHODS, getOneQuery } from "../../server/utils";

// Import Handlers from SERVER here
import { createHandler } from '../../server/handlers/email-subscription/signup.handler'

// Define an array of objects specifying the supported HTTP methods, corresponding handlers, and optional request body validation schema.
const methodsHandlers = [
  {
    method: HTTP_METHODS.POST,
    handler: createHandler,
    bodySchema: undefined, // No body schema required for GET requests.
  },
];

// Create an array of allowed HTTP methods extracted from the methodsHandlers array.
const allowedMethods = methodsHandlers.map(({ method }) => method);

// Create a middleware function that combines multiple middleware layers and assigns labels to them.
const withMiddleware = label(
  {
    allowMethods: allowMethods(allowedMethods), // Restrict the allowed HTTP methods for this endpoint.
    validateRequest: validateRequest(methodsHandlers), // Validate incoming requests based on the methodsHandlers array.
    jwtAuth, // Authenticate requests using JSON Web Tokens.
  },
  []
);

// Export a function that applies the specified middleware to incoming requests and uses the chooseHandler function to select the appropriate handler.
export default withMiddleware(
  "allowMethods",
  "validateRequest",
)((req, res) => chooseHandler(req, res, methodsHandlers));
