import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#ffdf33]/80 top-0 w-full z-50 ">
      <div className="container mx-auto px-4 flex justify-between items-center h-16 left-10">
        {/* Navigation Links (Left) */}
        <div className="hidden md:flex space-x-8 ml-14 items-center font-bold">
          <Link
            href="/"
            className="text-[#8b3f91]  text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#8b3f91]  text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            About
          </Link>
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-[#8b3f91]  text-lg font-serif transition-transform active:scale-90 hover:scale-110 inline-flex items-center">
              Services
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute z-10 bg-[#FFE55C]/90 divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link
                      href="/services/software-dev"
                      className="block px-4 py-2 text-[#8B3F91] hover:text-white"
                    >
                      Software Developing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cyber-security"
                      className="block px-4 py-2 text-[#8B3F91] hover:text-white"
                    >
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digital-marketing"
                      className="block px-4 py-2 text-[#8B3F91] hover:text-white"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/training"
                      className="block px-4 py-2 text-[#8B3F91] hover:text-white"
                    >
                      Training
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/pricings"
            className="text-[#8b3f91]  text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            Pricings
          </Link>
        </div>

        {/* Logo (Center) */}
        <div className="flex justify-center flex-grow">
          <Link href="/">
            <Image
              src="/image/logo.svg"
              alt="Retis Systems Logo"
              width={84}
              height={50}
            />
          </Link>
        </div>

        {/* Contact Us Button (Right) */}
        <div className="flex lg:space-x-4 space-x-2 items-center">
          <Link href="/blog">
            <button className="border border-[#8B3F91] hover:bg-[#8B3F91] hover:text-white text-[#8B3F91] font-bold lg:py-2 lg:px-6 py-2 px-3 text-sm lg:text-lg rounded">
              Blog
            </button>
          </Link>

          <Link href="/contact">
            <button className="bg-[#8B3F91] hover:bg-[#ffe55c] border border-[#8B3F91] text-white font-bold lg:py-2 lg:px-6 py-2 px-3 text-sm lg:text-lg rounded">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 ">
          <Link href="/products" className="text-gray-800 hover:text-gray-600">
            Products
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600">
            Services
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
