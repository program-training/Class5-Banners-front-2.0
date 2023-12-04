import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URI = import.meta.env.VITE_BASE_URI || "http://192.168.10.77:";
const PORT = import.meta.env.VITE_PORT || "4000";

const client = new ApolloClient({
    uri: BASE_URI + PORT,
    cache: new InMemoryCache(),
});

export default client;
