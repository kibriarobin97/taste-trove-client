import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Root/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import Contact from "../pages/Contact";
import AllUsers from "../pages/Dashboard/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: '/dashboard/cart',
          element: <Cart></Cart>
        },

        //admin route
        {
          path: '/dashboard/all-users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;