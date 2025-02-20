import React from "react";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";
import { serviceData } from "@/Data/data";

function services() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${serviceData.img})`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {serviceData.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {serviceData.desc}
          </p>
        </div>
      </div>
      <Services />
      <Skill />
      <Footer />
    </>
  );
}

export default services;
