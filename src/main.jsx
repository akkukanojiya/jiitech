import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import "./index.css";
 
import ContactUs from "./Components/ContactUs.jsx";
 
import HowToApply from "./Components/HowToApply.jsx"
import Gallery from "./Components/Gallery.jsx";
import Weoffer from "./Components/WeOffer.jsx";
import OurProduct from "./Components/OurProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/weoffer",
        element: <Weoffer/>
      },
      {
        path: "/gallery",
        element: <Gallery/>,
      },
      {
        path:"/howtoapply",
        element:<HowToApply />
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
 
      {
        path: "/ourproducts",
        element: <OurProduct />,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
