import React from "react";

const Hero = () => {
  return (
    <div className="h-[84vh] min-h-[60vh] md:h-[50vh] lg:h-[90vh] w-full relative flex flex-col justify-center items-center lg:mt-0 sm:mt-20 overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/retis-vid.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Centered Content */}
      <div className="text-center text-white max-w-5xl px-6 relative z-10">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 mt-8 lg:mt-0 text-[#8B3F91]">
          Empower Your Digital Journey
        </h1>
        <p className="text-base sm:text-sm md:text-base lg:text-lg font-mono lg:mb-5 mb-3 leading-relaxed">
          Innovative solutions for your business growth and security.
        </p>
        <button className="bg-transparent border border-[#8B3F91] hover:bg-black/50 hover:border-white rounded-3xl text-white font-bold py-2 px-4 sm:py-3 sm:px-8 md:px-12 lg:px-16 mt-4 lg:mb-8">
          GET STARTED
        </button>
      </div>

      {/* Responsive Cards Section */}
      <div className="hidden md:flex justify-center gap-4 mt-8 w-full max-w-4xl px-4">
        {[
          {
            title: "Digital Marketing",
            description:
              "Boost your online presence with our expert marketing strategies.",
          },
          {
            title: "Cybersecurity",
            description:
              "Protect your business with top-tier security solutions.",
          },
          {
            title: "Software Developing",
            description:
              "Custom software tailored to meet your business needs.",
          },
          {
            title: "Cloud Computing",
            description: "Scalable cloud solutions for your business growth.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-md py-5 px-4 rounded-lg text-center text-white h-[180px] flex flex-col justify-center items-center w-full max-w-[220px]"
          >
            <h3 className="text-md font-bold text-[#8B3F91]">{item.title}</h3>
            <p className="text-xs mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* For Small Screens: Two Rows of Two Cards */}
      <div className="block md:hidden mt-8 mb-10">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Digital Marketing",
              description:
                "Boost your online presence with our expert marketing strategies.",
            },
            {
              title: "Cybersecurity",
              description:
                "Protect your business with top-tier security solutions.",
            },
            {
              title: "Software Developing",
              description:
                "Custom software tailored to meet your business needs.",
            },
            {
              title: "Cloud Computing",
              description: "Scalable cloud solutions for your business growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md py-5 px-4 rounded-lg text-center text-white h-[180px] flex flex-col justify-center items-center"
            >
              <h3 className="text-md font-bold text-[#8B3F91]">{item.title}</h3>
              <p className="text-xs mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
