import React from "react";
import { blogData } from "@/Data/data";

function Blog() {
  return (
    <div className="skill w-full h-[90vh]">
      <div className="w-full h-[25%] bg-zinc-900 flex justify-center items-center">
        <h2 className="text-5xl font-bold">My Blog Section</h2>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center gap-8">
        {blogData?.map((item) => {
          return (
            <div
              key={item.value}
              className="w-60 h-60 rounded-lg bg-[#000000dc] flex justify-center items-center flex-col gap-2">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-6xl font-black text-cyan-500">{item.value}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[25%] bg-zinc-900"></div>
    </div>
  );
}

export default Blog;
