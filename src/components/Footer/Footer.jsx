import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer container-fluid bg-primary-color ">
        <div className="row p-5">
          <div className="col-md-4 text-center text-white font-roboto p-4 mt-3 ">
            <span className="h2">LOCATION</span>
            <p className="address fs-6 mt-3">2251 john Daniel Drive</p>
            <p className="fs-6">Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center text-white font-roboto p-5  ">
            <span className="h2">AROUND THE WEB</span>
            <ul className="list-unstyled d-flex flex-row gap-3 mt-3 text justify-content-center">
              <li>
                <i className="fa-brands fa-facebook-f fs-5 border p-2 rounded-circle"></i>
              </li>
              <li>
                <i className=" fa-brands fa-linkedin-in fs-5 border p-2 rounded-circle"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter fs-5 border p-2 rounded-circle"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram fs-5 border p-2 rounded-circle"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-white font-roboto p-4 mt-3 ">
            <span className="h2 fw-bold">ABOUT FREELANCER</span>
            <p className="address fs-6">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            <p className="fs-6">Clark, MO 65243</p>
          </div>
        </div>
        <div className="w-100 text-center  bg-footer p-3">
            <span className="text-white">Copyright © Your Website 2021</span>
        </div>
      </div>
      
    </>
  );
}
