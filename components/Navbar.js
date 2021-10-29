import React, { useState } from "react";
import Image from "next/image";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import Logo from "../assets/images/Logoaziz.png";
import NavbarConfig from "../config/NavbarConfig";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("HOME");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="flex items-center justify-between py-4   border-b-2 border-gray-100 ">
        <a href="#" className="w-16 h-16">
          {/* Azi<span className="text-blue">z</span>{" "} */}
          <Image src={Logo} alt="Logo" className="" />
        </a>
        <div className="space-x-12 items-center hidden md:flex">
          <ul className="flex items-center space-x-8 ">
            {NavbarConfig.map((item, indx) => (
              <li
                key={indx}
                className={`font-semibold group  ${
                  activeMenu === item.title.toUpperCase() ? "text-blue" : ""
                }`}
              >
                <a href="#" className="">
                  {" "}
                  {item.title}{" "}
                </a>
                <div className="h-0.5 bg-blue  scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
              </li>
            ))}
          </ul>

          {/* <button className="flex justify-center items-center px-5 py-2.5 text-white bg-blue rounded-lg">
            Download CV
          </button> */}

          <button className="flex items-center justify-center px-4 py-2   font-sans font-semibold  border-2  border-gray-400 text-gray-700 rounded-lg transition duration-200 hover:bg-gray-100 transform md:hover:scale-105 ">
            Resume
            <ArrowNarrowDownIcon className="h-5 w-5 ml-3 animate-bounce fill-current" />
          </button>
        </div>

        <button
          className="text-blue w-10 h-10 relative focus:outline-none md:hidden"
          onClick={handleClick}
        >
          <span
            className={`block absolute rounded-sm h-1 w-full bg-current transform transition duration-500 ease-in-out -translate-y-2.5 ${
              open && "rotate-135 -translate-y-0"
            }`}
          ></span>
          <span
            className={`block absolute rounded-sm  h-1 w-full bg-current transform transition duration-500 ease-in-out ${
              open && "opacity-0 "
            }`}
          ></span>
          <span
            className={`block absolute rounded-sm  h-1 w-full bg-current transform  transition duration-500 ease-in-out translate-y-2.5  ${
              open && "-rotate-135 translate-y-0"
            }`}
          ></span>
        </button>
      </nav>
    </header>
  );
}
