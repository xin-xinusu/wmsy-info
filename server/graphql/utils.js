
import { GraphQLError } from 'graphql';
import { ResolversErrors } from './errors';
import db from '../utils';

export const getCustomer = async (session) => {
  if (!session?.user?.email) {
    throw new GraphQLError(ResolversErrors.UNAUTHORIZED);
  }
  const customer = await db.Customer.findOne({ email: session.user.email });
  if (!customer) {
    throw new GraphQLError(ResolversErrors.UNAUTHORIZED);
  }
  return customer;
};

// Just a wrapper function to make code intent readable
export const assertCustomerLoggedIn = async (session) => {
  await getCustomer(session);
};
