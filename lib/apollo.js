import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL + "/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          properties: offsetLimitPagination(),
        },
      },
    },
  }),
  ssrMode: true,
});