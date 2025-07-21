import React from "react";
import DecorationLine from "./../DecorationLine/DecorationLine";

export default function About() {
  return (
    <>
      <section
        id="aboutSection"
        className="min-vh-100 bg-hero d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="text-white fw-bolder fs-1">ABOUT COMPONENT</h1>
        <DecorationLine />
        <div className="container mt-3">
          <div className="row">
            <div className="mt-4 col-md-6 text-white font-roboto">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="mt-4 col-md-6 text-white font-roboto">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
