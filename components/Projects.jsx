import React from "react";
import { projectData } from "@/Data/data";

function Projects() {
  return (
    <section className="w-full h-auto xl:h-[80vh] p-4">
      <div className="w-full h-[30%] flex justify-center items-center">
        <h3 className="text-4xl md:text-5xl font-bold my-8 xl:my-0">
          Projects
        </h3>
      </div>
      <div className="w-full h-[70%] flex justify-center items-center gap-8 flex-wrap">
        {projectData?.map((item) => {
          return (
            <div
              key={item.title}
              className="card w-full md:w-96 h-80 overflow-hidden rounded-lg shadow-lg shadow-zinc-700">
              <img src={item.img} className="w-full h-full" alt="#" />
              <div className="cardDetail flex justify-center items-center flex-col ga-4 text-gray-800 p-4 text-center">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>{item.desc}</p>
                <a
                  href={item.link}
                  className="px-4 py-2 bg-cyan-500 rounded-md text-sm font-semibold text-white mt-4">
                  SeeMore
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
