"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// Styles pour chaque slide
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "65vh",
  width: "100%",
};

// Images du diaporama
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
      <button className="w-10 h-10 hidden bg-white text-black rounded-full absolute left-5 transform -translate-y-1/2 top-1/2 z-10 hover:bg-gray-300 transition duration-300 ease-in-out">
        &#10094;
      </button>
    ),
    nextArrow: (
      <button className="w-10 h-10 bg-white hidden text-black rounded-full absolute right-5 transform -translate-y-1/2 top-1/2 z-10 hover:bg-gray-300 transition duration-300 ease-in-out">
        &#10095;
      </button>
    ),
  };

  return (
    <div className="slide-container relative">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative">
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              className="bg-cover bg-center"
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
