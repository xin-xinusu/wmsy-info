import { StatusCodes } from 'http-status-codes';
import qs from 'qs';
import { ZodError, ZodType } from 'zod';
import { HTTP_METHODS_VALUES, HandlersErrors } from '../utils/http';

export const getQuery = (url) => {
  return qs.parse((url || "").split("?")[1]);
};

export class ValidateRequestInput {
  constructor({method, querySchema, bodySchema, handler}) {
    this.method = method;
    this.querySchema = querySchema;
    this.bodySchema = bodySchema;
    this.handler = handler;
  }
}

export const parseQueryParam = (querySchema, req) => {
  try {
    return querySchema.parse(getQuery(req.url));
  } catch (e) {
    return querySchema.parse(req.query);
  }
};

export const validateRequest = (inputValidators) => {
  return async (req, res, next) => {
    try {
      for (const { method, querySchema, bodySchema } of inputValidators) {
        if (req.method === method) {
          if (querySchema) {
            parseQueryParam(querySchema, req);
          }
          if (bodySchema) {
            bodySchema?.parse(req.body);
          }
          await next();
          return;
        }
      }
      // Should never be here if used with the allowMethods middleware
      throw new Error('Method not implemented');
    } catch (err) {
      if (err instanceof ZodError) {
        res
          .status(StatusCodes.UNPROCESSABLE_ENTITY)
          .json({ message: err.issues });
      } else {
        console.log('[validateRequest] error: ', err);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
      }
      return;
    }
  };
};
