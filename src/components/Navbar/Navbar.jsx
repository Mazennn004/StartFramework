import React from "react";
import { NavLink , Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primary-color fixed-top">
        <div className="container  p-3 d-flex flex-row justify-content-between position-relative">
          <div className="left-side">
            <div className="nav-brand roboto fs-3 fw-bold text-white">
              <Link to="" className="text-white text-decoration-none">START FRAMEWORK</Link>
            </div>
          </div>

          <div className="collapse-nav">
            
            <span className="bars-menu">
              <label htmlFor="menu">
                <i className="fa-solid fa-bars fs-1 mt-1 text-white"></i>
              </label>
            </span>
          </div>
           <input type="checkbox" id="menu" className="d-none menubar" hidden />
        <div className="right-side container-fluid  nav-links position-absolute start-0 end-0 bottom-0 bg-primary-color p-2">
          <ul className="p-2 list-unstyled d-flex flex-column gap-3 font-roboto fw-bolder text-white fs-5">
            <li className="link">
              <NavLink
                className="text-decoration-none text-white p-2 rounded-3"
                to="about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                className="text-decoration-none text-white p-2 rounded-3"
                to="contact"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                className="text-decoration-none text-white p-2 rounded-3"
                to="portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
       
      </nav>
    </>
  );
}
