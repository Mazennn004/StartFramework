import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import MainLayout from './components/MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const routes=createBrowserRouter(
    [
    {path:'',element:<MainLayout/>,children: [
    {index:true,element:<Hero/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}]}
   

  ]);
  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
