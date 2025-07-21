import React from "react";
import DecorationLine from "./../DecorationLine/DecorationLine";

export default function Contact() {
  return (
    <div className="min-vh-100 bg-hero pt-5 ">
      <header className="text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bolder text-white">CONTACT COMPONENT</h1>
        <DecorationLine />
      </header>
      <div className="container mt-5">
        <form className="d-flex flex-column justify-content-center align-align-items-center gap-3">
          <input type="text" className="form-control" placeholder="username" />
          <input
            inputMode="numeric"
            className="form-control"
            placeholder="age"
          />
          <input type="email" className="form-control" placeholder="email" />
          <input
            type="number"
            className="form-control"
            placeholder="phone number"
          />
          
        </form>
        <button className="btn btn-success mt-3" type="submit" onClick={(e) => {e.preventDefault()}}>Submit</button>
      </div>
    </div>
  );
}
