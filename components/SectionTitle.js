import React from "react";

export default function SectionTitle({ nb, title }) {
  return (
    <h2 className="flex items-center mb-16 text-2xl font-pop font-semibold  text-primary  sm:text-4xl mx-auto max-w-screen-lg ">
      <span className="text-blue mr-2.5"> 0{nb}.</span> {title}
      <span className="hidden sm:block flex-1 ml-5 h-px bg-gray-300"></span>
    </h2>
  );
}
