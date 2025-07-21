import React from "react";
import image from "../../assets/images/imgi_1_avataaars.svg";
import DecorationLine from './../DecorationLine/DecorationLine';
export default function Hero() {
  return (
    <>
      <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-hero">
        <figure>
          <img src={image} className="w-100" alt="svg image" />
        </figure>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bolder text-white mt-1">START FRAMEWORK</h1>
          <DecorationLine/>
        </div>
      </main>
    </>
  );
}
