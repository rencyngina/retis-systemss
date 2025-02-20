import React from "react";
import Navbar from "@/Components/Navbar";
import Head from "@/Components/Head";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";

const pric = () => {
  return (
    <>
      <Head />
      <Navbar />

      <div className="min-h-screen flex flex-col items-center">
        <div
          className="h-60 w-11/12 flex-col justify-center items-center text-center mt-4 "
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
        <div>
        <h1 className="text-3xl lg:text-4xl text-black font-bold flex items-center justify-center">Pricing & packages for marketing services & solutions</h1>
        <p className="text-lg lg:xl text-black font bold flex items-center justify-center">
        Retis Systems Marketing Agency provides end-to-end solutions,including digital marketing, social media marketing, SEO, PPC ads with Google & YouTube advertising, and ecommerce solutions. Our billboard advertising services, events marketing experiences, printing & branding services, website design, and experiential marketing activations ensure your brand leaves a lasting impression. Let us help you achieve your goals— Send us your custom request for a quotation for any of our solutions by
        Read more: Digital Marketing Pricing & Packages in Kenya 
        </p>
        </div>

      </div>
    </>
  );
};

export default pric;
