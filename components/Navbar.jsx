"use client";
import React, { useEffect, useState } from "react";
import { navData } from "@/Data/data";
import Link from "next/link";
import { logo } from "@/Data/data";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrolltrigger = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", scrolltrigger);
    return () => window.removeEventListener("scroll", scrolltrigger);
  }, []);
  return (
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
      <div>
        <button
          className={`text-sm font-semibold px-4 py-2 border-2 ${
            scroll ? "border-black" : "border-white"
          } rounded-md hover:text-teal-600 hover:border-teal-600`}>
          Download CV
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
