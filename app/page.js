"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Blog from "@/components/Blog";
import Skill from "@/components/Skill";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import Link from "next/link";
import { haiderData } from "@/Data/data";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="hero w-full h-auto md:h-screen relative top-0">
        <div className="hero1 md:hidden">
          <div className="w-full h-auto pt-12 overflow-hidden flex justify-center items-center">
            <Image
              src={haiderData?.img}
              width={250}
              height={100}
              className="cursor-pointer duration-700 hover:scale-105 mt-12 rounded-lg"
              alt="Picture of the author"
            />
          </div>
          <div className="w-full h-auto flex justify-center items-center flex-col text-center p-12">
            <h1 className="text-3xl font-bold font-creepson my-6">
              {haiderData?.name}
            </h1>
            <p className="text-sm text-gray-200">{haiderData?.desc}</p>
          </div>
          <div className="flex justify-center items-center gap-6 pb-14">
            <button className="px-8 py-2 bg-gradient-to-tr from-blue-600 to-blue-500 border-2 border-blue-500 rounded-md">
              Downlad-CV
            </button>
            <Link
              href="/contact"
              className="px-8 py-2 bg-transparent border-2 border-white rounded-md">
              Contact-US
            </Link>
          </div>
        </div>

        {/* running after MD */}
        <div className="hero3 hidden w-full h-full rounded-br-[90%] rounded-bl-[20%] relative lg:flex items-center">
          <div className="w-1/2 pl-16 flex flex-col gap-2">
            <h2 className="text-6xl font-bold my-4">{haiderData?.name}</h2>
            <p>{haiderData?.desc}</p>
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-2 bg-gradient-to-tr from-blue-600 to-blue-500 border-2 border-blue-500 rounded-md">
                Downlad-CV
              </button>
              <Link
                href="/contact"
                className="px-8 py-2 bg-transparent border-2 border-white rounded-md">
                Contact-US
              </Link>
            </div>
          </div>
          <div className="rounded-2xl w-96 h-96 bg-gray-500 absolute top-1/2 left-2/3 transform -translate-x-1/4 -translate-y-1/2 overflow-hidden flex justify-center items-center">
            <Image
              src="/images/my1.jpeg"
              width={400}
              height={400}
              className="cursor-pointer duration-700 hover:scale-105"
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
      <Slider />
      <Blog />
      <Skill />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
