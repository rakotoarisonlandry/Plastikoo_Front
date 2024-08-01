"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "65vh",
  width: "100%",
};

const slideImages = [
  {
    url: "/slide3.png",
    caption: "Slide 1",
  },
  {
    url: "/slide1.png",
    caption: "Slide 2",
  },
  {
    url: "/slide2.png",
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  const properties = {
    prevArrow: (
      <button className="hidden w-12 h-12 bg-white text-primary rounded-full absolute ml-5 transform -translate-y-1/2 top-1/2  justify-center items-center z-10">
        &#10094;
      </button>
    ),
    nextArrow: (
      <button className="w-12 h-12 hidden bg-white text-primary rounded-full absolute mr-5 transform -translate-y-1/2 top-1/2 justify-center items-center z-10">
        &#10095;
      </button>
    ),
  };
  return (
    <div className="slide-container relative">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
