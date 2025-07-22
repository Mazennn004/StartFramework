import React, { useState } from "react";
import DecorationLine from "./../DecorationLine/DecorationLine.jsx";
import House from "../../assets/images/imgi_1_poert1.png";
import Img2 from "../../assets/images/imgi_2_port2.png";
import Img3 from "../../assets/images/imgi_3_port3.png";
export default function Portfolio() {
  const [isClicked, setisClicked] = useState(false);
  let [image, setImage] = useState("");

  function handleClick(event) {
    setImage(event.currentTarget.getAttribute("data-image-src"));

    setisClicked(true);
  }
  function hideLayer(){
    setisClicked(false);
  }
  return (
    <>
      {isClicked ? (
        <div onClick={(e)=>{hideLayer();
          
        }} className="position-fixed start-0 end-0 top-0 bottom-0 bg-black image-layer bg-opacity-50 d-flex justify-content-center align-items-center">
          <figure onClick={(e)=>{e.stopPropagation()}}>
            <img src={`${image}`} className="w-100" alt="image" />
          </figure>
        </div>
      ) : (
        ""
      )}

      <div className="bg-hero">
        <header className="pt-5  d-flex justify-content-center flex-column align-items-center">
          <h1 className="font-roboto fw-bolder text-white text-center">
            PORTFOLIO COMPONENT
          </h1>

          <DecorationLine />
        </header>
        <section className="min-vh-100 mt-3 position-relative">
          <div className="container">
            <div className="row g-3">
              <div
                onClick={(e) => {
                  handleClick(e);
                 
                }}
                className="col-md-4 image"
                data-image-src={House}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0  bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                    <img src={House} alt="house" className="w-100 rounded-3" />
                  </figure>
                </div>
              </div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="col-md-4 image"
                data-image-src={Img2}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <img src={Img2} alt="house" className="w-100 rounded-3" />
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0 z-3 bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                  </figure>
                </div>
              </div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="col-md-4 image"
                data-image-src={Img3}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <img src={Img3} alt="house" className="w-100 rounded-3" />
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0 z-3 bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                  </figure>
                </div>
              </div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="col-md-4 image"
                data-image-src={House}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <img src={House} alt="house" className="w-100 rounded-3" />
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0 z-3 bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                  </figure>
                </div>
              </div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="col-md-4 image"
                data-image-src={Img2}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <img src={Img2} alt="house" className="w-100 rounded-3" />
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0 z-3 bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                  </figure>
                </div>
              </div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="col-md-4 image"
                data-image-src={Img3}
              >
                <div className="inner">
                  <figure className="p-2 position-relative">
                    <img src={Img3} alt="house" className="w-100 rounded-3" />
                    <div className="layer position-absolute top-0 end-0 start-0 bottom-0 z-3 bg-primary-color rounded-3 opacity-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus-circle display-1 text-white"></i>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
