"use client";
import React, { useEffect, useState, useRef } from "react";
import { navData } from "@/Data/data";
import Link from "next/link";
import { logo } from "@/Data/data";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrolltrigger = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", scrolltrigger);
    return () => window.removeEventListener("scroll", scrolltrigger);
  }, []);
  return (
    <>
      <nav
        className={`w-full px-8 py-2 flex justify-between items-center fixed top-0 z-20 transition-all duration-800 ${
          scroll ? "bg-white text-black" : "bg-transparent"
        }`}>
        <div>
          <img src={logo.svg} className="h-12" alt="#" />
        </div>
        <div className="hidden sm:flex gap-12 text-sm font-semibold">
          {navData?.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <Link className="hover:text-teal-500" href={item.path}>
                    {item?.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <MdMenuOpen className="text-3xl font-black z-20" />
            ) : (
              <MdOutlineMenu className="text-3xl font-black z-20" />
            )}
          </button>
        </div>
        <div className="hidden sm:block">
          <button
            className={`text-sm font-semibold px-4 py-2 border-2 ${
              scroll ? "border-black" : "border-white"
            } rounded-md hover:text-teal-600 hover:border-teal-600`}>
            Download CV
          </button>
        </div>
      </nav>
      <nav
        style={open ? { left: "50%" } : { left: "100%" }}
        className="w-52 h-screen z-10 bg-[#000000e8] fixed flex justify-center flex-col gap-4 font-bold items-center duration-700 sm:hidden">
        {navData?.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <Link href={item?.path} onClick={() => setOpen(false)}>
                  {item?.title}
                </Link>
              </li>
            </ul>
          );
        })}
      </nav>
    </>
  );
}

export default Navbar;
