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

const Head = () => {
  return (
    <div className="bg-gradient-to-b from-[#8B3F91] to-[#A531AD] w-full">
      <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center text-white text-sm">
          <Link
            href="tel:+254777293812"
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
          >
            <FaPhone className="ml-4" />
            <p className="hidden sm:block">+254 777293812</p>
          </Link>

          <Link
            href="mailto:info@retistech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
          >
            <MdEmail className="ml-3" />
            <p className="hidden sm:block">info@retistech.com</p>
          </Link>

          <div className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0">
            <IoLocationSharp className="ml-3" />
            <p className="hidden sm:block">5th Avenue Office Suites, 4</p>
          </div>

          <a
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/Retistech"
          >
            <BsTwitter className="ml-3" />
            <p className="hidden sm:block">Twitter</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/retistech/"
          >
            <FaLinkedin className="ml-3" />
            <p className="hidden sm:block">LinkedIn</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/retistech?_rdc=1&_rdr#"
          >
            <FaFacebookF className="ml-3" />
            <p className="hidden sm:block">Facebook</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/retistech/"
          >
            <FaInstagram className="ml-3" />
            <p className="hidden sm:block">Instagram</p>
          </a>

          <a
            className="flex items-center space-x-2 mt-2 mb-3 sm:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@retistech"
          >
            <FaTiktok className="ml-3" />
            <p className="hidden sm:block">TikTok</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
