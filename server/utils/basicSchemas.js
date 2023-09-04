import { z } from "zod";
import { nameValidation, numberSchema } from "./schemas";

export const createBasicBodySchema = z
  .object({
    data: z
      .object(
        {
          attributes: z
            .object(
              {
                name: nameValidation,
              },
              {
                required_error: "attributes field is required",
                invalid_type_error: "attributes field should be an object",
              }
            )
            .strict(),
        },
        {
          required_error: "data field is required",
          invalid_type_error: "data field should be an object",
        }
      )
      .strict(),
  })
  .strict();

export const updateBasicBodySchema = z
  .object({
    data: z
      .object(
        {
          id: numberSchema(),
          attributes: z
            .object(
              {
                name: nameValidation,
              },
              {
                required_error: "attributes field is required",
                invalid_type_error: "attributes field should be an object",
              }
            )
            .strict(),
        },
        {
          required_error: "data field is required",
          invalid_type_error: "data field should be an object",
        }
      )
      .strict(),
  })
  .strict();
