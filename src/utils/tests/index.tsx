import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "../../redux/store";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "../../config";
import fetch from "cross-fetch";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const testClient = new ApolloClient({
  link: new HttpLink({ uri: API_URL, fetch }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
  },
});
