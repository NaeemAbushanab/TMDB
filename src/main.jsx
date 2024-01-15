import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { fetchUserDetalis } from "./features/user/userSlice.js";
import TrendMovies from "./features/movies/TrendMovies.jsx";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/router.jsx";

store.dispatch(fetchUserDetalis());
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
