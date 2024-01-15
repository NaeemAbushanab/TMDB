import { createBrowserRouter } from "react-router-dom";
import TrendMovies from "../features/movies/TrendMovies";
import MainLayout from "./mainLayout";
import TV from "../features/tv/TV";
import Home from "../features/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/trend",
        element: <TrendMovies />,
      },
      {
        path: "/tv",
        element: <TV />,
      },
    ],
  },
]);

export { router };
