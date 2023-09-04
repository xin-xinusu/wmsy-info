const { InputType, Field } = require("type-graphql");
const { CURRENCIES } = require("../../utils/constants");

const RegisterInput = InputType("RegisterInput", {
  fields: () => ({
    firstName: { type: String },
    lastName: { type: String }
  })
});

const UpdateCustomerInput = InputType("UpdateCustomerInput", {
  fields: () => ({
    ...RegisterInput.getFields(),
    city: { type: String },
    state: { type: String },
    country: { type: String }
  })
});

const CreateOrderInput = InputType("CreateOrderInput", {
  fields: () => ({
    txId: { type: String },
    transaction: { type: String },
    propertyId: { type: Number },
    tokens: { type: Number },
    currency: { type: CURRENCIES }
  })
});

const WalletInput = InputType("WalletInput", {
  fields: () => ({
    walletName: { type: String },
    walletAddress: { type: String },
    oldWalletAddress: { type: String, nullable: true, defaultValue: undefined }
  })
});

module.exports = {
  RegisterInput,
  UpdateCustomerInput,
  CreateOrderInput,
  WalletInput
};
