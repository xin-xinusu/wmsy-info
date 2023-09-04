import { ZodTypeAny, z } from "zod";

export const numberSchema = (validate = z.number()) =>
  z.preprocess((a) => parseInt(z.string().parse(a), 10), validate);

export const dateSchema = (validate = z.date()) =>
  z.preprocess((a) => new Date(z.string().parse(a)), validate);

export const nameValidation = z
  .string({
    required_error: "name field is required",
    invalid_type_error: "name should be a string",
  })
  .min(1, { message: "name should be at least 1 character long" });

export const getManyQuery = z
  .object(
    {
      page: z
        .object(
          {
            number: numberSchema(z.number().min(0)),
            size: numberSchema(z.number().min(0).max(100)),
          },
          {
            required_error: "Missing pagination fields",
            invalid_type_error: "Pagination fields should be in an object",
          }
        )
        .strict(),
      sort: z.string().optional(),
      // TODO: improve type validation here
      filter: z.any(),
    },
    {
      invalid_type_error: "Invalid type for query",
      required_error: "Missing required query",
    }
  )
  .strict();

export const getOneQuery = z
  .object(
    { id: numberSchema() },
    {
      invalid_type_error: "Invalid type for query",
      required_error: "Missing required query",
    }
  )
  .strict();

export const updateOneQuery = getOneQuery;

export const deleteOneQuery = getOneQuery;