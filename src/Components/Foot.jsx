import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Foot = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffe55c] to-[#E9CA30] w-full">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center text-sm">
          <Link
            href="tel:+254777293812"
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
          >
            <FaPhone className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>+254 777293812</p>
          </Link>

          <Link
            href="mailto:info@retistech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
          >
            <MdEmail className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>info@retistech.com</p>
          </Link>

          <div className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0"> 
            <IoLocationSharp className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>5th Avenue Office Suites, 4</p>
          </div>

          <a
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/Retistech"
          >
            <BsTwitter className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>Twitter</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/retistech/"
          >
            <FaLinkedin className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>LinkedIn</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/retistech?_rdc=1&_rdr#"
          >
            <FaFacebookF className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>Facebook</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/retistech/"
          >
            <FaInstagram className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>Instagram</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-8 sm:mb-0" 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@retistech"
          >
            <FaTiktok className="ml-2" />
            <p className="hidden sm:block" style={{ color: '#8B3F91' }}>TikTok</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foot;
