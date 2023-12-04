import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <CssBaseline />
                <App />
            </Provider>
        </BrowserRouter>
    </ApolloProvider>
);
