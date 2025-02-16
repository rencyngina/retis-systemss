import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import Button from "../Button";

const Footer = () => {
  return (
    <footer className="bg-[#ffdf33] text-white flex flex-col">
      {/* Yellow Section with Reduced Height */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg text-[#07294C] font-semibold mb-4">
            About Us
          </h3>
          <p className="text-sm text-[#07294C]">
            At Retis Systems, we believe in collaboration, innovation, and
            shared success. Our mantra, "Shining Together," reflects our passion
            for progress.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#07294C]">Contact</h3>
          <ul className="text-sm text-[#07294C] space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:info@retissystems.com"
                className="hover:underline"
              >
                info@retissystems.com
              </a>
            </li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Tech Lane, Innovation City</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#07294C] mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-3 text-black">
            <Button />
          </div>
        </div>
      </div>

      {/* Black Line */}
      <div className="border-t border-gray-700"></div>

      {/* Footer Bottom with Blue Background (Full Width) */}
      <div className="bg-[#ffdf33] py-4 text-center text-sm text-[#07294C] w-full flex-grow">
        © {new Date().getFullYear()} Retis Systems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
