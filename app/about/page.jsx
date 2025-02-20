import React from "react";
import Blog from "@/components/Blog";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";
import { aboutData } from "@/Data/data";

function About() {
  return (
    <>
      <section className="w-full h-auto -z-10">
        <div className="header1 w-full h-[50vh] text-white flex justify-center items-center">
          <div className="pt-40">
            <div className="flex gap-8 justify-center items-center flex-wrap">
              <button className="px-8 py-2 rounded-md border-2 border-white bg-transparent font-semibold hover:text-cyan-500 hover:border-cyan-500">
                Home
              </button>
              <h4 className="text-3xl font-black">
                About <span className="text-cyan-500">US</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full h-auto md:h-[90vh] p-8">
          <div className="w-full h-[20%] flex justify-center items-center text-center">
            <h3 className="text-4xl">Amet consectetur adipisicing elit.</h3>
          </div>
          <div className="w-full h-[80%] flex flex-wrap">
            <div className="w-full md:w-1/2 h-full flex justify-center items-center p-4 sm:p-12 overflow-hidden">
              <img
                src={aboutData?.img}
                className="w-[90%] h-[90%] rounded-md shadow-2xl shadow-gray-400"
                alt="#developer"
              />
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-left text-center sm:text-left flex-col p-12 gap-8">
              <h2 className="text-2xl md:text-5xl font-semibold mb-1">
                {aboutData?.title}
              </h2>
              <p>{aboutData?.desc}</p>
              <button className="px-8 py-2 rounded-md border-2 border-white bg-transparent font-semibold hover:text-cyan-500 hover:border-cyan-500">
                Home
              </button>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Skill />
      <Footer />
    </>
  );
}

export default About;
