import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import Mylist from "../pages/MyList/Mylist";

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
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/addspot',
            element: <PrivateRoute>
                <AddTouristSpot></AddTouristSpot>
            </PrivateRoute>,
        },
        {
            path: '/mylist',
            element: <PrivateRoute>
                <Mylist></Mylist>
            </PrivateRoute>,
        },
      ],
    },
  ]);


export default router;