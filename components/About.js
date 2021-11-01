import React from "react";
import Image from "next/image";
import MyImg from "../assets/images/MyPhoto.jpg";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className=" mt-20 lg:mt-32">
      <SectionTitle nb="1" title="About Me" />

      <div className="flex flex-col items-center gap-y-8  lg:flex-row lg:gap-y-0 lg:gap-x-8 ">
        <p className="flex-1 font-sans text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eum!
          Fugiat doloribus eligendi cum, iure adipisci quibusdam ab sed minus
          libero. Provident dolores consequatur quibusdam similique quae!
          Labore, totam mollitia. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos quidem quia ullam. Id, provident. Laborum quo
          ipsa explicabo quibusdam placeat praesentium mollitia possimus totam
          temporibus quis. Maxime, pariatur quod. Impedit?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, fugit!
          Doloribus nobis incidunt ea, sed provident, dolor consequuntur qui
          dicta dolorum excepturi minus eveniet cupiditate perferendis rem,
          dolorem iusto necessitatibus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores, eum! Fugiat doloribus eligendi cum, iure
          adipisci quibusdam ab sed minus libero. Provident dolores consequatur
          quibusdam similique quae! Labore, totam mollitia. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Eos quidem quia ullam. Id,
          provident. Laborum quo ipsa explicabo quibusdam placeat praesentium
          mollitia possimus totam temporibus quis. Maxime, pariatur quod.
          Impedit?
        </p>

        <div className="w-1/2 flex justify-center  group   md:w-2/5 lg:self-start">
          <div className="relative  w-screen/2  h-screen/2    sm:w-80 sm:h-80  bg-primary rounded-lg leading-no ">
            <div className="absolute -right-3 -bottom-3  md:-right-5 md:-bottom-5 border-2 border-primary h-full w-full rounded-sm group-hover:-right-2 group-hover:-bottom-2 md:group-hover:-right-3 md:group-hover:-bottom-3  transition-all duration-400 ease-in-out" />

            <Image
              className="relative  rounded-md opacity-75 hover:opacity-100 transition-all duration-200 ease-in-out"
              src={MyImg}
              alt="My Photo"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
