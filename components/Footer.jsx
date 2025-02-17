import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { navData } from "@/Data/data";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full h-auto md:h-[60vh] bg-zinc-900 px-8">
      <div className="w-full h-[85%] grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptate rem ducimus. Odit consectetur earum dolore enim placeat
            nulla eaque eligendi, nemo ad? Blanditiis, quisquam pariatur!
            Voluptatum animi quaerat veritatis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. amet laborum repellat illum! Neque,
            iusto.
          </p>
          <div className="flex gap-4 mt-6">
            <FaInstagram className="text-pink-700" />
            <FaLinkedin className="text-blue-500" />
            <FiYoutube className="text-red-500" />
            <FaFacebookSquare className="text-blue-600" />
          </div>
        </div>
        <div className="p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Tabs</h2>
          {navData?.map((item) => {
            return (
              <ul key={item.title}>
                <li>
                  <Link
                    className="font-semibold text-sm hover:text-blue-500"
                    href={item.path}>
                    {item.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Servicess</h2>
          <ul>
            <li>App Development</li>
            <li className="my-4">Web Development</li>
            <li className="my-4">Logic Build</li>
            <li className="my-4">SEO</li>
          </ul>
        </div>
        <div className="p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact </h2>
          <div className="flex items-center gap-4">
            <GrMapLocation className="text-green-600" />
            <p>uklana mandi hisar haryana</p>
          </div>
          <div className="flex items-center gap-4">
            <MdMarkEmailUnread className="text-yellow-600" />
            <span>harsg@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <BsBrowserSafari className="text-blue-600" />
            <span>heysgghd.com</span>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Email">Send meesage</label>
            <textarea
              type="text"
              className="bg-transparent p-2 outline-none border-2 border-gray-700 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-[15%] border-t-2 border-zinc-600 flex justify-center items-center">
        <p>this is footer of my web &#169; || create by Harsh Indora</p>
      </div>
    </footer>
  );
}

export default Footer;
