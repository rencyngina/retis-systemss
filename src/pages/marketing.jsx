// File: TeamPage.jsx
import React from "react";
import { Mail, Instagram, Twitter } from "lucide-react";

// Custom Card components
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

const Members = () => {
  // Dummy data for 10 team members
  const teamMembers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/johndoe", twitter: "https://twitter.com/johndoe" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/janesmith", twitter: "https://twitter.com/janesmith" },
    { id: 3, name: "Michael Lee", email: "michael.lee@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/michaellee", twitter: "https://twitter.com/michaellee" },
    { id: 4, name: "Emily Davis", email: "emily.davis@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/emilydavis", twitter: "https://twitter.com/emilydavis" },
    { id: 5, name: "Chris Brown", email: "chris.brown@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/chrisbrown", twitter: "https://twitter.com/chrisbrown" },
    { id: 6, name: "Laura Wilson", email: "laura.wilson@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/laurawilson", twitter: "https://twitter.com/laurawilson" },
    { id: 7, name: "David Miller", email: "david.miller@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/davidmiller", twitter: "https://twitter.com/davidmiller" },
    { id: 8, name: "Sophia Johnson", email: "sophia.johnson@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/sophiajohnson", twitter: "https://twitter.com/sophiajohnson" },
    { id: 9, name: "Daniel Garcia", email: "daniel.garcia@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/danielgarcia", twitter: "https://twitter.com/danielgarcia" },
    { id: 10, name: "Olivia Martinez", email: "olivia.martinez@example.com", image: "https://via.placeholder.com/150", instagram: "https://instagram.com/oliviamartinez", twitter: "https://twitter.com/oliviamartinez" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {teamMembers.map((member) => (
          <Card key={member.id} className="p-2">
            <CardHeader className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`${member.name}'s Profile`}
                className="w-16 h-16 rounded-full mb-2"
              />
              <CardTitle className="text-sm text-center font-medium">
                {member.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xs text-gray-500 mb-2">{member.email}</p>
              <div className="flex justify-center space-x-2">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Members;
