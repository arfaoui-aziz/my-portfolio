import React from "react";
import Lottie from "react-lottie";
import * as workLottie from "../assets/lotties/man-working.json";

export default function Hero() {
  const defaultOptions = {
    loop: 2,
    speed: 0.5,
    autoplay: true,
    animationData: workLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="hero"
      className="flex flex-col gap-y-12 mt-12   items-center md:mt-16  md:flex-row md:gap-x-8 md:gap-y-0"
    >
      <div className="flex-1">
        <h1 className="font-pop font-bold text-2xl  xs:text-5xl  text-primary mb-3 break-words ">
          Software Engineering Student with a strong passion for
          <span className="text-blue"> Web Developement </span>
        </h1>
        <p className="font-sans text-base text-gray-600 mb-8 break-words ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          maxime blanditiis at neque, magni voluptates, exercitationem
        </p>
        <div className="flex flex-col md:flex-row ">
          <button className="px-14 py-3 mb-3  font-sans font-semibold   text-white bg-blue rounded-sm md:mr-6 md:mb-0 md:items-center hover:bg-indigo-600 transition duration-200 transform md:hover:scale-110">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex-1">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
