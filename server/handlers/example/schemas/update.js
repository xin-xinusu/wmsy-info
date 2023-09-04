const z = require("zod");
const { nameValidation, numberSchema } = require("../../../utils");
const { propertyTypeIdsValidation } = require("./common");

const updateAmenityBodySchema = z
  .object({
    data: z
      .object(
        {
          id: numberSchema(),
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
  .strict();

module.exports = {
  updateAmenityBodySchema,
};
