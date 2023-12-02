import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main"
import Home from "../pages/home/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Error from "../pages/Error";
import CreateStore from "../pages/createStore/CreateStore";
import Dashboard from "../Layout/Dashboard";
import Menu from "../pages/dashboard/Menu";
import AddProduct from "../pages/dashboard/AddProduct";
import ManageProduct from "../pages/dashboard/ManageProduct";
import SalesCollection from "../pages/dashboard/SalesCollection";
import PrivateRoute from "./PrivateRoute";
import Subsiption from "../pages/dashboard/Subsiption";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import CheckOut from "../pages/dashboard/CheckOut";
import SaleSummary from "../pages/dashboard/SaleSummary";


export const router =createBrowserRouter([

{
    path:'/',
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/createStore',
            element:<PrivateRoute><CreateStore></CreateStore></PrivateRoute>
        }

    ]

},
{
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    error:<Error></Error>,
    children:[
      {
        //user only route
        path:'/dashboard',
        element:<ManageProduct></ManageProduct>
      },
      {
        path:'/dashboard/home',
        element:<ManageProduct></ManageProduct>
      },
      {
        path:'/dashboard/menu',
        element:<Menu></Menu>
      },
      {
        path:'/dashboard/subscription',
        element:<Subsiption></Subsiption>
      },
    //   //admin only route
    //   {
    //     path:'/dashboard/allUsers',
    //     element:<AllUsers></AllUsers>
    //   },
      {
        path:'/dashboard/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/dashboard/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/products/specific/${params.id}`)
      },
      {
        path:'/dashboard/manageProduct',
        element:<ManageProduct></ManageProduct>
      },
      {
        path:'/dashboard/salesCollection',
        element:<SalesCollection></SalesCollection>
      },
      {
        path:'/dashboard/checkOut',
        element:<CheckOut></CheckOut>
      },
      {
        path:'/dashboard/saleSummary',
        element:<SaleSummary></SaleSummary>
      }
    ]
  }

]);

