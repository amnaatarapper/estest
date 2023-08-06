import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/client.ts";
import { setupStore } from "./redux/store.ts";

import "./styles/index.scss";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
