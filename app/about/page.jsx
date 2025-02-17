import React from "react";
import Blog from "@/components/Blog";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <section className="w-full h-auto -z-10">
        <div className="header1 w-full h-[50vh] text-white flex justify-center items-center">
          <div className="pt-40">
            <div className="flex gap-8 justify-center items-center">
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
          <div className="w-full h-[20%] flex justify-center items-center">
            <h3 className="text-4xl">Amet consectetur adipisicing elit.</h3>
          </div>
          <div className="w-full h-[80%] flex">
            <div className="w-1/2 h-full flex justify-center items-center p-12 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7793741/pexels-photo-7793741.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="w-[90%] h-[90%] rounded-md shadow-2xl shadow-gray-400"
                alt="#developer"
              />
            </div>
            <div className="w-1/2 h-full flex justify-center items-left flex-col p-12 gap-8">
              <h2 className="text-5xl font-semibold mb-2">
                Hello My Name is <span>Harshel</span>
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quisquam architecto praesentium. Est, deleniti minima.
                Nostrum nobis ex error voluptate fugiat quidem, temporibus a
                aperiam quaerat vel ipsum consequatur nihil.
              </p>
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
