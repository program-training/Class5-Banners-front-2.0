import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { getToken } from "../features/users/service/localStorageService";
import { setContext } from "@apollo/client/link/context";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";

const removeTypenameLink = removeTypenameFromVariables();
// const BASE_URI = import.meta.env.VITE_BASE_URI;
// const PORT = import.meta.env.VITE_PORT || "4000";

const httpLink = createHttpLink({
  // uri: `${BASE_URI}${PORT}`,
  uri: `http://localhost:2121/`,
});
import { from } from "@apollo/client";

const link = from([removeTypenameLink, httpLink]);

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache({ typePolicies: {} }),
});

export default client;
