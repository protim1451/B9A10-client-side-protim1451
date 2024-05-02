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
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
import TouristSpotDetail from "../pages/TouristSpotDetails/TouristSpotDetails";
import UserProfile from "../pages/UserProfile/UserProfile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://b9-a10-server-side-protim1451-kxey2ntu9-partha-s-projects.vercel.app/spots'),
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
        {
            path: '/allspots',
            element: <AllTouristSpots></AllTouristSpots>,
        },
        {
          path: '/allspots/:id',
          element: <PrivateRoute>
            <TouristSpotDetail></TouristSpotDetail>
          </PrivateRoute>,
           loader: ({params}) => fetch(`https://b9-a10-server-side-protim1451-kxey2ntu9-partha-s-projects.vercel.app/spots/${params.id}`),
        },
        {
          path: '/profile',
          element: <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>,
        },
      ],
    },
  ]);


export default router;