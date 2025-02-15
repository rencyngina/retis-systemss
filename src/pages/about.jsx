import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Head from '@/Components/Head';

const About = () => {
  return (
    <>
     
      <Head />
     

      {/* Added padding to push content down */}
      <div className=""> {/* Add padding to ensure spacing */}
        {/* Purple Background Section */}
        <div className="bg-[#ffe55c] w-full min-h-[60vh] py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-6 xl:p-12 lg:p-8">
            
            {/* Left Section: Text */}
            <div className="lg:w-1/3 max-h-[45vh] overflow-hidden">
              <h1 className="text-2xl lg:text-3xl text-yellow-600 flex justify-center items-center text-center lg:mb-10 mb-8">
                Financial Planning Services
              </h1>
              <p className="text-lg lg:text-xl font-medium flex justify-center items-center text-center text-[#8B3F91]">
                Sovereign Wealth Management offers financial planning and discretionary portfolio management services.
              </p>
            </div>

            {/* Right Section: Images */}
            <div className="hidden lg:block">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 relative">
                <div className="relative flex flex-row gap-5">
                  <Image
                    src="/image/seen.jpg"
                    alt="financial"
                    width={230}
                    height={200}
                    className="border-2 border-[#ffe55c]"
                    style={{ borderRadius: "80px 80px 60px 0" }}
                    loading="lazy"
                  />
                  <Image
                    src="/image/seens.jpg"
                    alt="financial"
                    width={230}
                    height={200}
                    className="border-2 border-[#ffe55c]"
                    style={{ borderRadius: "80px 0 80px 60px" }}
                    loading="lazy"
                  />
                  <Image
                    src="/image/senn.jpg"
                    alt="financial"
                    width={220}
                    height={220}
                    className="border-2 border-[#ffe55c]"
                    style={{ borderRadius: "80px 80px 0 60px" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Container */}
      <div className="relative -mt-16">
        <div className="mx-auto w-[90%] lg:w-3/4 bg-white shadow-sm p-6 lg:p-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#083c71] mb-4 flex items-center justify-center">
            About Us
          </h2>
          <div className="w-full h-1 bg-yellow-500 mb-4 flex items-center justify-center"></div>
          <p className="text-lg text-gray-600 leading-relaxed flex items-center justify-center font-light">
            At Retis Systems Limited, we are committed to empowering businesses and
            individuals through cutting-edge information security, software development, 
            and online marketing solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
