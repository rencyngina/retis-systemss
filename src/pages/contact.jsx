import React from "react";
import Navbar from "@/Components/Navbar";
import styles from "@/styles/contact.module.css";
import Button from "@/Components/Button";
import Head from "@/Components/Head";
import Foot from "@/Components/Foot";

const Contact = () => {
  return (
    <>
      
      <Navbar />
      <div className="min-h-screen flex flex-col mt-">
        {/* Top Section */}
        <div className="w-full min-h-[50vh] flex flex-col lg:flex-row  bg-[#ffe55c] items-center justify-between px-6 xl:px-12 py-12 gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl text-yellow-600 font-roboto mb-6 font-bold flex justify-center items-center">
              Get In Touch
            </h1>
            <p className="text-lg lg:text-lg text-[#8b3f91] font-medium flex justify-center items-center text-center mb-10">
              Feel free to get in touch with us. We are always open to
              discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>

            {/* Moved Icon Button */}
            <div className="relative mb-20 mt-10 ">
              <Button />
            </div>
          </div>

          {/* Right Side - Map Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div
              className={`w-full max-w-md overflow-hidden ${styles.maskImage}`}
            >
              <img
                src="/image/map2.jpg"
                alt="Map Location"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Container - Smaller */}
        <div className="w-full flex justify-center -mt-24">
          <div className="bg-white/80 sha w-full max-w-5xl flex flex-col md:flex-row items-stretch overflow-hidden">
            {/* Left Side - Contact Form */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border p-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full border p-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here"
                    rows="3"
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-32 bg-gray-800 text-white py-2 rounded font-semibold hover:bg-[#2e2827] flex justify-center items-center focus:ring-2 focus:ring-gray-600"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Right Side - Background Image */}
            <div className="relative w-full md:w-1/3 flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/image/call.jpeg')" }}
              ></div>
              <div className="relative z-10 p-4 text-center"></div>
            </div>
          </div>
        </div>

        {/* Map Section - Placed Much Lower */}
        <div className="w-full flex flex-col items-center text-center mt-24 px-6 mb-9">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Find Us Here
          </h1>
          <div className="w-48 h-1 bg-[#A65A2A] mb-4"></div>
          <p className="text-lg text-gray-600 mb-6 font-montserrat">
            We are located at 5th Avenue Office Suite, 4th Floor, Suite 4 – 15,
            Off Ngong Road
          </p>
          <div className="w-full max-w-6xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske"
              width="100%"
              height="350"
              className="shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Contact;
