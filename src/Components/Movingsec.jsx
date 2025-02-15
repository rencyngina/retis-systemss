import React from "react";
import { motion } from "framer-motion";

const MotionSection = () => {
  const items = [
    {
      image: "image/iconn1.png",
      text: "Digital Marketing",
    },
    {
      image: "image/icon5.png",
      text: "Expert Guidance",
    },
    {
      image: "image/icon8.png",
      text: "Software Development",
    },
    {
      image: "image/icon3.png",
      text: "Innovative Solutions",
    },
    {
      image: "image/icon2.png",
      text: "Robust Security",
    },
  ];

  const motionSettings = {
    x: ["100%", "-100%"], // Move from right to left
    transition: {
      x: {
        repeat: Infinity, // Loop animation infinitely
        repeatType: "loop", // Smooth looping
        duration: 15, // Duration for one full loop
        ease: "linear", // Continuous smooth motion
      },
    },
  };

  return (
    <div className="lg:h-[8vh] h-[8vh] bg-white overflow-hidden flex items-center brightness-30">
      <motion.div
        className="flex items-center space-x-16"
        animate={motionSettings}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.text}
              className="w-12 h-12 sm:w-16 sm:h-16" // Smaller on small screens
            />
            <span className="text-white text-base sm:text-xl font-semibold whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionSection;
