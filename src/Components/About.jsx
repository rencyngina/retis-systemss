import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-4 md:px-10 lg:px-28 relative">
      {/* Left Section: Frosted Glass Effect */}
      <div className="md:w-1/2 relative text-center md:text-left space-y-8 justify-center p-6 bg-white/20 backdrop-blur-xl shadow-sm">
        <h1 className="text-3xl lg:text-7xl md:text-5xl font-cursive text-gray-800">
          About Us
        </h1>
        <h4 className="text-2xl font-montserrat text-yellow-500">
          Learn more about our growth
        </h4>
        <p className="text-gray-600 text-lg font-mono">
          We are dedicated to innovation and collaboration, ensuring that we
          shine together. Identify and prioritize fundamental controls and
          remediation actions while creating a single source of truth for all
          endpoint tools and teams.
        </p>
        <button className="bg-[#07294C] text-white font-bold px-8 py-3 hover:bg-blue-600 transition">
          Read More
        </button>
      </div>

      {/* Right Section: Two Side-by-Side Images with Custom Rounded Corners */}
      <div className="md:w-1/2 flex justify-center lg:space-x-1 space-x-1 mt-8  md:mt-0 lg:mt- lg:mb-0 mb-6 md:mb-10">
        {/* First Image: Rounded Corners */}
        <img
          src="image/per.jpg"
          alt="Description 1"
          className="w-1/2 sm:w-1/2 rounded-tl-full rounded-br-3xl shadow-lg brightness-100"
        />

        {/* Second Image: Rounded Corners */}
        <img
          src="image/pxr.jpg"
          alt="Description 2"
          className="w-1/2 sm:w-1/2 rounded-tr-3xl rounded-bl-3xl shadow-lg brightness-100"
        />
      </div>
    </div>
  );
};

export default About;
