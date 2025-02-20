import React from "react";
import Navbar from "@/Components/Navbar";
import Foot from "@/Components/Foot";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import Head from "@/Components/Head";

const softwareProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description:
      "Transforming data into actionable insights with AI-driven analytics for businesses worldwide.",
    imageUrl: "/image/software5.jpg",
    link: "/ai-analytics",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable and intuitive online shopping experience tailored for modern consumers.",
    imageUrl: "/image/software3.jpg",
    link: "/ecommerce",
  },
  {
    id: 3,
    title: "Cloud-Based CRM",
    description:
      "Optimized customer relationship management with cloud-powered tools and automation.",
    imageUrl: "/image/software1.jpg",
    link: "/crm",
  },
  {
    id: 4,
    title: "Cybersecurity Suite",
    description:
      "Advanced security solutions to safeguard sensitive data and prevent cyber threats.",
    imageUrl: "/image/software2.jpg",
    link: "/cybersecurity",
  },
];

const Cyber = () => {
  return (
    <>
      <Head />
      <Navbar className="fixed" />

      <div className="min-h-screen flex flex-col items-center bg-[#ffe55c]">
        <div className="bg-white/20 backdrop-blur-lg p-10 rounded-lg shadow-2xl max-w-7xl w-full mt-12 mb-12 ">
          <div
            className="h-60 w-full flex flex-col justify-center items-center text-center mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/image/try.jpeg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <h1 className="text-3xl lg:text-4xl text-white font-bold">
              Software Development Solutions
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Innovative and scalable solutions tailored for your business needs.
            </p>
          </div>
          {softwareProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:container md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-700 mt-4">
                  {project.description}
                </p>
                <Link href={project.link}>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg shadow-lg"
                  width={450}
                  height={250}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cyber;