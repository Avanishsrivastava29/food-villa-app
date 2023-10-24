import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
// import LoginForm from "./Components/LoginForm";
 
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router-dom";
// import { Shimmer } from "react-shimmer";
import UserContext from "./Utils/UserContext";
// import store from "./Utils/store";
// import { Provider } from "react-redux";
const Instamart=lazy(()=>import("./Components/Instamart")) 




 const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:"/About",
        element:<About/>,
        errorElement:<Error/>
      },
      {
        path:"/Contact",
        element:<Contact/>,
        errorElement:<Error/>
      }
      ,
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
        errorElement:<Error/>
      },
      {
        path:"/instamart",
        element:
        <Suspense   fallback={<Shimmer/>}>
        <Instamart/>
        </Suspense>,
        errorElement:<Error/>
      }
            
 
    ]
  },
  

  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);