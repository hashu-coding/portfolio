"use client";
import React, { useRef } from "react";
import { skiilData1 } from "@/Data/data";
import { skiilData2 } from "@/Data/data";
import { motion, useInView } from "motion/react";

function Skill() {
  const refr1 = useRef(null);
  const refr2 = useRef(null);
  const refView1 = useInView(refr1, { once: true });
  const refView2 = useInView(refr2, { once: true });
  return (
    <div className="w-full h-auto md:h-[80vh]">
      <div className="w-full h-[30%] flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-black mt-8 md:mt-0">Skills</h2>
      </div>
      <div className="w-full h-auto md:h-[70%] flex justify-center items-center flex-wrap">
        <div
          ref={refr1}
          className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:p-8">
          {skiilData1?.map((item) => {
            return (
              <div key={item.name} className="w-full flex flex-col gap-3 p-8">
                <motion.div
                  initial={{ justifyContent: "start" }}
                  animate={refView1 ? { justifyContent: "space-between" } : {}}
                  transition={{ duration: 1 }}
                  className="flex items-center"
                  style={{ width: `${item.percent}%` }}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 5 }}
                    transition={{ duration: 2 }}
                    className="text-lg md:text-2xl font-bold">
                    {item.name}
                  </motion.h2>
                </motion.div>
                <div className="w-full h-2 bg-gray-400 rounded-lg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={refView1 ? { width: `${item.percent}%` } : {}}
                    transition={{ duration: 2 }}
                    className="h-full relative"
                    style={{
                      backgroundColor: `${item.color}`,
                    }}>
                    <h2 className="text-lg md:text-2xl font-bold absolute right-0 -top-10 md:-top-11 z-2">
                      {item.percent}%
                    </h2>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          ref={refr2}
          className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:p-8">
          {skiilData2?.map((item) => {
            return (
              <div key={item.name} className="w-full flex flex-col gap-3 p-8">
                <div
                  className="flex justify-between items-center"
                  style={{ width: `${item.percent}%` }}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={refView2 ? { opacity: 5 } : {}}
                    transition={{ duration: 2 }}
                    className="text-lg md:text-2xl font-bold">
                    {item.name}
                  </motion.h2>
                </div>
                <div className="w-full h-2 rounded-lg bg-gray-400">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={refView2 ? { width: `${item.percent}%` } : {}}
                    transition={{ duration: 2 }}
                    className="h-full relative"
                    style={{
                      backgroundColor: `${item.color}`,
                    }}>
                    <h2 className="text-lg md:text-2xl font-bold absolute right-0 -top-11 z-2">
                      {item.percent}%
                    </h2>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
