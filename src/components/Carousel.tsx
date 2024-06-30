"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent = ({ images }: CarouselComponentProps) => {
  return (
    <Carousel className="border-0 border-red-500 h-60 md:h-72 w-full ">
      {images.map((imageSrc, index) => (
        <Carousel.Item key={index}>
          <img src={imageSrc} className="h-60 md:h-72 w-full d-block object-cover object-top rounded-lg" alt="Carousel Pict" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
