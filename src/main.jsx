import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error/Error.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import GitHub, { githubInfoLoader } from "./components/GitHub/GitHub.jsx";

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout></Layout>,
//     children :[
//       {
//         path:'',
//         element:<Home></Home>

//       },
//       {
//         path:"/about",
//         element:<About></About>
//       },
//       {
//         path:"/contact",
//         element:<Contact></Contact>
//       }
//     ],
//     errorElement:
//     <Error></Error>
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<Error/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route loader={githubInfoLoader} path="github" element={<GitHub/>}/>
      <Route path="user/:userid" element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
