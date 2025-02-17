import React from "react";

function Projects() {
  return (
    <section className="w-full h-auto md:h-[80vh]">
      <div className="w-full h-[30%] flex justify-center items-center">
        <h3 className="text-5xl font-bold ">Projects</h3>
      </div>
      <div className="w-full h-[70%] flex justify-center items-center gap-8">
        <div className="card w-96 h-80 overflow-hidden rounded-lg shadow-lg shadow-zinc-700">
          <img
            src="https://cdn.pixabay.com/photo/2023/01/30/07/24/losangeles-7754986_1280.jpg"
            className="w-full h-full"
            alt="#"
          />
          <div className="cardDetail flex justify-center items-center flex-col ga-4 text-gray-800 p-4 text-center">
            <h2 className="text-2xl font-bold">Project deatail</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              atque recusandae eius natus in quia, eos esse! Consequuntur dolore
              laudantium ipsa suscipit sit itaque magnam, quam dignissimos
              minima odio. Deleniti.
            </p>
            <a
              href="https://dlcsgroup.in/"
              className="px-4 py-2 bg-cyan-500 rounded-md text-sm font-semibold text-white mt-4">
              SeeMore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
