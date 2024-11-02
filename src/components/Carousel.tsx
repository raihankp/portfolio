"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import nextConfig from "../../next.config.mjs";

const { basePath } = nextConfig;

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent = ({ images }: CarouselComponentProps) => {
  return (
    <Carousel className="border-0 border-red-500 h-60 md:h-72 w-full ">
      {images.map((imageSrc, index) => (
        <Carousel.Item key={index}>
          <Image src={`${basePath}/${imageSrc}`} height={480} width={858} className="h-60 md:h-72 w-full d-block object-cover object-top rounded-lg" alt="Carousel Pict" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
