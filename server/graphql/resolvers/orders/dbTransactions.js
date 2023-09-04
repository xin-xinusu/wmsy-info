import { OrderStatus, PropertyStatus } from "../../../utils";
import Decimal from "decimal.js";
import { GraphQLError } from "graphql";
import { FEE_RATIO } from "../../../../Client/utils";
import { ResolversErrors } from "../../errors";
import { ORDER_RESERVED_STATES } from "../properties.resolver";

import * as db from '../../../utils'

const getReservedTokens = async (propertyId) => {
  return db.Order.countDocuments({
    propertyId,
    status: { $in: ORDER_RESERVED_STATES },
  });
};

const assertPropAvailability = async (totalTokens, reservedTokens, purchasedTokens) => {
  const availableTokens = totalTokens - reservedTokens;
  if (availableTokens < purchasedTokens) {
    throw new GraphQLError(ResolversErrors.EXCEEDED_AMOUNT);
  }
};

const assertCustomerAvailability = async (customer) => {
  if (customer.currencySymbolConfirmed) {
    return;
  }
  const nonFailedOrders = await db.Order.countDocuments({
    customerId: customer.id,
    status: { $in: ORDER_RESERVED_STATES },
  });
  if (nonFailedOrders >= 1) {
    throw new GraphQLError(ResolversErrors.NOT_ALLOWED_TO_BUY);
  }
};

export const getFee = (rawPrice) => {
  const price = new Decimal(rawPrice.toString());
  return BigInt(price.mul(FEE_RATIO).ceil().toString());
};

export const createOrder = (customer, propertyId, tokenAmount, purchaseTxId) => {
  return async () => {
    const reservedTokens = await getReservedTokens(propertyId);
    const property = await db.Property.findOne({
      _id: propertyId,
      status: PropertyStatus.PUBLISHED,
    });
    if (!property) {
      throw new Error("Property not found");
    }
    await assertPropAvailability(
      property.tokens,
      BigInt(reservedTokens),
      BigInt(tokenAmount)
    );
    await assertCustomerAvailability(customer);
    const price = BigInt(tokenAmount) * property.pricePerShare;
    const fee = getFee(price);
    return db.Order.create({
      customerId: customer.id,
      price,
      fee,
      propertyId,
      status: OrderStatus.PRE_PAY,
      tokens: BigInt(tokenAmount),
      purchaseTxId,
      purchasedStart: new Date(),
    });
  };
};
