import React from "react";
import { Instagram, Twitter } from "lucide-react";

// Custom Card components
const Card = ({ children, className }) => (
  <div
    className={`bg-[#8B3F91] shadow-md rounded overflow-hidden transition-all duration-300 transform hover:scale-105 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-sm font-semibold text-white ${className}`}>
    {children}
  </h2>
);

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      image: "image/roy.jpg",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "image/merency.jpg",
      instagram: "https://instagram.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael.lee@example.com",
      image: "image/roxy.jpg",
      instagram: "https://instagram.com/michaellee",
      twitter: "https://twitter.com/michaellee",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      image: "image/roxxy.jpg",
      instagram: "https://instagram.com/emilydavis",
      twitter: "https://twitter.com/emilydavis",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="lg:text-6xl text-2xl font-bold text-center lg:mb-8 mb-9 text-[#8B3F91]">
        Meet Our Team
      </h1>
      <p className="mb-10 lg:text-xl text-base  text-center  text-[#06111c]">
        At Retis Systems, our mantra "Shining Together" embodies our belief in
        the power
        <br /> of collaboration, innovation, and shared success.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="lg:w-72 lg:h-96 w-64 mx-auto">
            <CardHeader>
              <img
                src={member.image}
                alt={`${member.name}'s Profile`}
                className="w-full h-64 object-top object-cover rounded-t"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center">{member.name}</CardTitle>
              <p className="text-xs text-white text-center mb-2">
                {member.email}
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-yellow-700 hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-yellow-700 hover:text-blue-600 transition-colors duration-300" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => (window.location.href = "/memberss")}
          className="px-6 py-3 mt-10 border border-[#8B3F91] bg-white text-[#8B3F91] text-lg font-semibold  hover:bg-[#8B3F91] hover:text-white transition duration-300"
        >
          See All Team Members
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
