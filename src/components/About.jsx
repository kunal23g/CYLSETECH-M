import React, { useEffect, useState } from "react";
import about from "../assets/About.jpg";

function About() {
  return (
    <div
      id="about-us"
      className="w-full p-4 sm:p-8 md:p-12 lg:p-20 bg-[#CDEA68] "
    >
      <h1 className="text-black mt-5 text-justify font-neueMontreal  text-2xl md:text-3xl lg:text-[2vw] lg:leading-tight lg:leading-[2.5vw] tracking-tight">
        We are an AI-driven company specializing in video analytics, crowd
        management, and facial recognition technology. Our solutions empower
        smarter monitoring, real-time crowd insights, and enhanced security for
        public spaces and events. Additionally, we bring accountability to
        delivery management systems by leveraging advanced AI to ensure{" "}
        <span className="font-foundersGrotesk font-bold text-4xl lg:text-5xl ">
          TRANSPARENCY
        </span>{" "}
        and{" "}
        <span className="font-foundersGrotesk font-bold text-4xl lg:text-5xl ">
          RELIABILITY
        </span>{" "}
        throughout the logistics process. At{" "}
        <span className="font-foundersGrotesk font-bold text-4xl lg:text-5xl ">
          CYLSETECH
        </span>
        , we combine innovation and precision to create{" "}
        <span className="font-foundersGrotesk font-bold text-4xl lg:text-5xl mr-1 ">
          INTELLIGENT
        </span>
        , 
        <span className="font-foundersGrotesk font-bold text-4xl lg:text-5xl ">
          IMPACTFUL 
        </span> solutions for a safer and more efficient world.
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-10 lg:mt-20">
        <div className="flex flex-col justify-center">
          <h1 className=" text-3xl mb-2 lg:mb-8 font-neueMontreal font-semibold  lg:text-7xl text-black">
          "Empowering Intelligence, Transforming Lives with AI Solutions."
          </h1>
          <h1 className=" mt-4 mb-3 sm:text-2xl  lg:text-xl text-black">
            At{" "}
            <span className="font-foundersGrotesk font-bold text-4xl mr-1 ">
              CYLSETECH
            </span>
            ,we harness the power of Artificial Intelligence to create smarter, safer, and more efficient systems. From cutting-edge video analytics and advanced crowd management to precise facial recognition, our solutions are designed to transform the way the world operates.
But we don’t stop there. Our accountability-driven delivery management tools ensure transparency and trust in logistics, setting new benchmarks for reliability in the industry.
We innovate to empower businesses and communities alike, building technology that doesn’t just solve problems but anticipates them. Together, let’s shape a world where AI works for everyone
          </h1>
          
        </div>
        <div className="sm:mt-5  lg:mx-20 relative aspect-square rounded-3xl overflow-hidden group">
          <img className="w-full h-full object-cover" src={about} alt="About" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white uppercase text-4xl font-bold">
              cylsetech
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
