"use client";
import React, { useRef } from "react";
import { blogData } from "@/Data/data";
import CountUp from "react-countup";
import { useInView } from "motion/react";

function Blog() {
  const refrence = useRef(null);
  const viewCounter = useInView(refrence, { once: true });
  return (
    <div className="skill w-full h-auto md:h-[90vh]">
      <div className="w-full h-[25%] bg-zinc-900 flex justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-bold my-8">My Blog Section</h2>
      </div>
      <div
        ref={refrence}
        className="w-full h-1/2 flex justify-center items-center gap-8 flex-wrap py-4 md:py-0">
        {blogData?.map((item) => {
          return (
            <div
              key={item.value}
              className="w-60 h-60 rounded-lg bg-[#000000dc] flex justify-center items-center flex-col gap-2">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-6xl font-black text-cyan-500">
                <CountUp
                  start={0}
                  duration={3}
                  end={viewCounter ? item.value : ""}></CountUp>
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[25%] bg-zinc-900"></div>
    </div>
  );
}

export default Blog;
