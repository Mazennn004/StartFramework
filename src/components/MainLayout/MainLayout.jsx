import React from "react";
import Navbar from './../Navbar/Navbar.jsx';
import Footer from './../Footer/Footer.jsx';
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>);
}
