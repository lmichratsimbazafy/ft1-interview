import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createClient = () => {
  return new ApolloClient({
    uri: process.env.REACT_APP_ENDPOINT_URL,
    cache: new InMemoryCache(),
  });
};
