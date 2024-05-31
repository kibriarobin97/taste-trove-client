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
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserHome";
import Secret from "../pages/Secret";

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
      },
      {
        path: '/secret',
        element: <Secret></Secret>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // normal user routes
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/user-home',
        element: <UserHome></UserHome>
      },

      //admin route
      {
        path: '/dashboard/all-users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/add-items',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: '/dashboard/manage-items',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: '/dashboard/update-item/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: '/dashboard/admin-home',
        element: <AdminHome></AdminHome>
      }
    ]
  }
]);

export default router;