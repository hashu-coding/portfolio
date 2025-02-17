import React from "react";

function Services() {
  return (
    <section className="w-full h-[60vh] bg-zinc-900">
      <div className="w-full h-1/3 flex justify-center items-center">
        <h2 className="text-4xl font-black">My Services</h2>
      </div>
      <div className="w-full h-2/3 flex justify-center items-center gap-8 md:gap-32">
        <div className="w-52 h-52 rounded-md p-8 flex justify-center items-center flex-col gap-4">
          <img src="/icons/app.png" alt="#" />
          <p className="font-semibold text-2xl">App Design</p>
        </div>
        <div className="w-52 h-52 rounded-md p-8 flex justify-center items-center flex-col gap-4">
          <img src="/icons/web.png" alt="#" />
          <p className="font-semibold text-2xl">Web Design</p>
        </div>
        <div className="w-52 h-52 rounded-md p-8 flex justify-center items-center flex-col gap-4">
          <img src="/icons/logics.png" alt="#" />
          <p className="font-semibold text-2xl">Logic-Build</p>
        </div>
        <div className="w-52 h-52 rounded-md p-8 flex justify-center items-center flex-col gap-4">
          <img src="/icons/dbms.png" alt="#" />
          <p className="font-semibold text-2xl">Management</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
