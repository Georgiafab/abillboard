
import { createBrowserRouter } from "react-router-dom";

import App from '../App.tsx'
import Index from "../pages/index.tsx";
import ErrorPage from "../pages/error-page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: < App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);
