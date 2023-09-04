const { ObjectType, Field } = require("type-graphql");
const { BigIntResolver } = require("./scalars");

const Extraction = ObjectType({ description: "Extraction" })(class {});

const Media = ObjectType({ description: "Media" })(class {});

const Currency = ObjectType({ description: "Currency" })(class {});

const Customer = ObjectType({ description: "Customer" })(class {
  cashBalance;
  propertiesOwned;
  rentalIncome;
  appreciation;
  totalReturn;
  nextPayout;
  properties;
});

Field()(Customer.prototype, "cashBalance");
Field()(Customer.prototype, "propertiesOwned");
Field()(Customer.prototype, "rentalIncome");
Field()(Customer.prototype, "appreciation");
Field()(Customer.prototype, "totalReturn");
Field()(Customer.prototype, "nextPayout");
Field({ nullable: true, defaultValue: [] })(Customer.prototype, "properties");

const Property = ObjectType({ description: "Property" })(class {
  media;
  amenities;
  sharesLeft;
  investors;
  sharesOwned;
});

Field({ nullable: true, defaultValue: [] })(Property.prototype, "media");
Field({ nullable: true, defaultValue: [] })(Property.prototype, "amenities");
Field()(Property.prototype, "sharesLeft");
Field()(Property.prototype, "investors");
Field()(Property.prototype, "sharesOwned");

const Amenity = ObjectType({ description: "Amenity" })(class {
  properties;
  media;
});

Field({ nullable: true, defaultValue: [] })(Amenity.prototype, "properties");
Field()(Amenity.prototype, "media");

const AmenityProperty = ObjectType({ description: "AmenityProperty" })(class {
  property;
  amenity;
});

Field()(AmenityProperty.prototype, "property");
Field()(AmenityProperty.prototype, "amenity");

const Order = ObjectType({ description: "Order" })(class {
  id;
  createdAt;
  tokens;
  price;
  fee;
  txId;
  status;
  property;
  customer;
  totalOrders;
  adminAddress;
});

Field({ type: BigIntResolver })(Order.prototype, "id");
Field({ type: Date })(Order.prototype, "createdAt");
Field({ type: BigIntResolver })(Order.prototype, "tokens");
Field({ type: BigIntResolver })(Order.prototype, "price");
Field({ type: BigIntResolver })(Order.prototype, "fee");
Field({ nullable: true, defaultValue: null })(Order.prototype, "txId");
Field()(Order.prototype, "status");
Field()(Order.prototype, "property");
Field()(Order.prototype, "customer");
Field()(Order.prototype, "totalOrders");
Field({ nullable: true, defaultValue: null })(Order.prototype, "adminAddress");

const Wallet = ObjectType({ description: "Wallet" })(class {
  id;
  walletName;
  walletAddress;
  customer;
});

Field({ type: BigIntResolver })(Wallet.prototype, "id");
Field()(Wallet.prototype, "walletName");
Field()(Wallet.prototype, "walletAddress");
Field()(Wallet.prototype, "customer");
