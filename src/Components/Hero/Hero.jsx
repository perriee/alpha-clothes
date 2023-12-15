import React from "react";
import "./Hero.css";
import { Carousel } from "flowbite-react";
import banner_alpha from "../Assets/gambar-fix/banner-alpha.png";
import banner_korsa from "../Assets/gambar-fix/banner-korsa.png";
import banner_totebag from "../Assets/gambar-fix/banner-totebag.png";

const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 min-h-screen z-20">
      <Carousel>
        <img src={banner_alpha} alt="..." />
        <img src={banner_korsa} alt="..." />
        <img src={banner_totebag} alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
