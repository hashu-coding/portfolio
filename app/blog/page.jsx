import React from "react";
import Blog from "@/components/Blog";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { blogData2 } from "@/Data/data";

function blog() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${blogData2.img})`,
        }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold">{blogData2.title}</h1>
          <p className="text-sm line-clamp-3 md:line-clamp-none md:text-xl mt-2">
            {blogData2.desc}
          </p>
        </div>
      </div>
      <Blog />
      <Projects />
      <Footer />
    </>
  );
}

export default blog;
