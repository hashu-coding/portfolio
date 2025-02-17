import React from "react";
import { skiilData1 } from "@/Data/data";
import { skiilData2 } from "@/Data/data";

function Skill() {
  return (
    <div className="w-full h-auto md:h-[80vh]">
      <div className="w-full h-[30%] flex justify-center items-center">
        <h2 className="text-5xl font-black">Skills</h2>
      </div>
      <div className="w-full h-[70%] flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center p-8">
          {skiilData1?.map((item) => {
            return (
              <div key={item.name} className="w-full p-8">
                <div
                  className="flex justify-between items-center"
                  style={{ width: `${item.percent}%` }}>
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <h2 className="text-2xl font-bold">{item.percent}%</h2>
                </div>
                <div className="w-full mt-2 h-2 bg-gray-400 rounded-lg overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${item.percent}%`,
                      backgroundColor: `${item.color}`,
                    }}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center p-8">
          {skiilData2?.map((item) => {
            return (
              <div key={item.name} className="w-full p-8">
                <div
                  className="flex justify-between items-center"
                  style={{ width: `${item.percent}%` }}>
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <h2 className="text-2xl font-bold">{item.percent} %</h2>
                </div>
                <div className="w-full h-2 rounded-lg overflow-hidden bg-gray-400">
                  <div
                    className="h-full"
                    style={{
                      width: `${item.percent}%`,
                      backgroundColor: `${item.color}`,
                    }}></div>
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
