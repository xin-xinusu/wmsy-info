import { z } from "zod";
import { nameValidation } from "../../property/schemas/common";
import { propertyTypeIdsValidation } from "./common";

export const createAmenityBodySchema = z
  .object({
    data: z
      .object(
        {
          attributes: z
            .object(
              {
                name: nameValidation,
                propertyTypeIds: propertyTypeIdsValidation,
                media: z.array(
                  z.object({
                    key: z.string(),
                    type: z.string(),
                    order: z.number(),
                  })
                ),
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
  .strict
