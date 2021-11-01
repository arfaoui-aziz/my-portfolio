import React from "react";
import Image from "next/image";

export default function ProjectCard({ project, nb }) {
  const { name, description, image, technologies, gitRepo, video } = project;

  return (
    <li className="relative grid grid-cols-12 gap-2.5 mb-20 group ">
      {/*Project Image*/}
      <div
        className={`relative col-span-full row-start-1 z-10 overflow-hidden  rounded-sm bg-primary leading-no     ${
          nb % 2
            ? "md:col-start-7 md:col-span-full "
            : "md:col-start-1 md:col-span-6"
        }`}
      >
        <Image
          src={image}
          layout="fill"
          className="rounded-sm  block opacity-70 group-hover:opacity-100 transition-all duration-200 ease-in-out"
        />
      </div>
      {/* Project Info Card */}
      <div
        className={`col-span-full relative   row-start-1  px-6 py-4 md:px-6 md:py-4 rounded-3xl md:bg-indigo-50 md:bg-opacity-60 ${
          nb % 2
            ? "md:col-start-1 md:col-span-7"
            : "md:col-start-6 md:col-span-full md:text-right"
        } `}
      >
        {/* Project Title */}
        <h3 className="mb-5 text-primary relative z-20 text-4xl font-pop font-semiboldd">
          {name}
        </h3>
        {/* Project description Card */}
        <div className="md:px-6 md:py-4 md:bg-gray-50 relative z-20 text-gray-800 font-sans  md:shadow-lg  md:rounded-md">
          <p>{description}</p>
        </div>
        {/* Tech Stack */}
        <ul
          className={`flex flex-wrap gap-x-6 relative z-20  text-sm text-gray-800  mt-6 ${
            !(nb % 2) && "md:justify-end"
          } `}
        >
          <li>JS</li>
          <li>Html</li>
          <li>NodeJS</li>
          <li>React</li>
        </ul>

        {/* Links */}
        <div
          className={`flex flex-wrap gap-x-4  relative z-20 items-center mt-6 ${
            !(nb % 2) && "md:justify-end"
          } `}
        >
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
}
