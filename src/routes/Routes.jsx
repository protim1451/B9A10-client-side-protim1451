import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
      ],
    },
  ]);


export default router;