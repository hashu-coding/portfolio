import React from "react";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

function Contact() {
  const bgImg = "images/slide1.jpg";
  return (
    <>
      <section className="cover w-full md:h-[50vh] flex justify-center md:justify-normal items-end p-20 md:p-0">
        <h2 className="md:mb-16 md:ml-16 text-4xl mt-16 md:text-6xl font-black">
          Contact-<span className="text-cyan-400">US</span>
        </h2>
      </section>
      <div className="w-full h-auto md:h-screen flex justify-center items-center md:p-20 py-4">
        <div className="w-full h-full rounded-xl flex flex-col justify-center items-center gap-4">
          <div className="w-full h-[30%] flex justify-center items-center">
            <h2 className="text-3xl md:text-6xl font-bold">Contact Form</h2>
          </div>
          <div className="w-full h-[70%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-24">
            <div className="p-2 md:p-12 overflow-hidden">
              <img
                src="/images/location.jpeg"
                className="rounded-md shadow-lg shadow-white"
                alt="#"
              />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
