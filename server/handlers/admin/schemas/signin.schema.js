const z = require("zod");

const signInBodySchema = z
  .object({
    username: z.string().email(),
    password: z.string(),
  })
  .strict();

const signInQuerySchema = undefined;

module.exports = {
  signInBodySchema,
  signInQuerySchema
};
