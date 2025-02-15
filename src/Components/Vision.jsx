import React from 'react';
import { Charm } from 'next/font/google';

// Font configuration
const charm = Charm({ subsets: ['latin'], weight: ['400', '700'] });

const Vision = () => {
  const cards = [
    {
      title: "Our Vision",
      description:
        "Inspiring a future where technology and sustainability go hand in hand, creating a better world for everyone.",
      icon: (
        <svg
          className="stroke-purple-200 shrink-0"
          height="50" // Reduced height
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="50" // Reduced width
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6" // Reduced stroke width
          />
        </svg>
      ),
    },
    {
      title: "Our Mission",
      description:
        "Driving innovation and eco-friendly solutions to reduce e-waste and promote sustainability globally.",
      icon: (
        <svg
          className="stroke-purple-200 shrink-0"
          height="50" // Reduced height
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="50" // Reduced width
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6" // Reduced stroke width
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative h-auto min-h-[50vh] flex items-center justify-center bg-white p-4 sm:p-6 md:p-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?nature,technology')] bg-cover bg-center opacity-30"></div>

      {/* Cards Section */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 max-w-5xl w-full"> {/* Adjusted gap */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-80 h-48 bg-[#8B3F91] rounded-xl shadow-2xl flex flex-row items-center justify-evenly gap-4 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200" // Reduced width and height
          >
            {/* Icon */}
            {card.icon}

            {/* Text Content */}
            <div>
              <span className={`text-xl font-bold text-white ${charm.className}`}> {/* Reduced text size */}
                {card.title}
              </span>
              <p className="text-md text-white mt-2"> {/* Reduced text size */}
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
