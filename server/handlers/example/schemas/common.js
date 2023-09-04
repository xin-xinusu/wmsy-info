const z = require("zod");

const propertyTypeIdsValidation = z
  .array(
    z.number({
      invalid_type_error: "every propertyTypeId should be a number",
    }),
    {
      required_error: "propertyTypeIds field is required",
      invalid_type_error: "propertyTypeIds should be an array of numbers",
    }
  )
  .min(1, { message: "propertyTypeIds should have at least 1 item" });

module.exports = {
  propertyTypeIdsValidation,
};
