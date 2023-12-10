import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { getToken } from "../features/users/service/localStorageService";
import { setContext } from "@apollo/client/link/context";

import { from } from "@apollo/client";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";

// const BASE_URI = import.meta.env.VITE_BASE_URI;
// const PORT = import.meta.env.VITE_PORT || "4000";

const removeTypenameLink = removeTypenameFromVariables();
const httpLink = createHttpLink({
  // uri: `${BASE_URI}${PORT}`,
  uri: `http://localhost:2121/`,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const link = from([authLink, removeTypenameLink, httpLink]);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
