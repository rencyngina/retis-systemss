import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import Link from "next/link";

const Head = () => {
  return (
    <div className='bg-gradient-to-b from-[#8B3F91] to-[#390E3C] w-full'>
        <div className='container mx-auto py-1 px-4 sm:px-6-lg:px-8'>
            <div className='flex flex-wrap items-center justify-center text-white text-sm '>
                <Link 
                    href='tel:+254 777293812'
                    className='flex items-center space-x-2'
                >
                <FaPhone className='mr-2' />
                <p className='mr-4 hidden sm:block'>+254 777293812</p>
                </Link>
                <Link
                    href="mailto:info@retistech.com"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex items-center mt-2 mb-3 sm-mb-0"
                >

                <MdEmail className='mr-2' />
                <p className='mr-4 hidden sm:block'>info@retistech.com</p>
                </Link>
                <div 
                href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center mt-2 mb-3 sm:mb-0'>

                <IoLocationSharp className='mr-2'/>
                <p className='mr-4 hidden sm:block'>5th Avenue Office Suites, 4</p>
                </div>

                <a
                className='flex items-center mt-2 mb-3 sm:mb-0'
                target="_blank"
                rel="noopener noreferrer"
                href='https://x.com/Retistech'
                >
                <BsTwitter className='mr-2'/>
                <p className='mr-4 hidden sm:block'>Twitter</p>
                </a>

                <a
                className='flex items-center mt-2 mb-3 sm:mb-0'
                target="_blank"
                rel="noopener noreferrer"
                href=''
                >
                <FaLinkedin className='mr-2'/>
                <p className='mr-4 hidden sm:block'>LinkedIn</p>
                </a>

                <a
                className='flex items-center mt-2 mb-3 sm:mb-0'
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.facebook.com/retistech?_rdc=1&_rdr#'
                >
                <FaFacebookF className='mr-2'/>
                <p className='mr-4 hidden sm:block'>Facebook</p>
                </a>

                <a
                className='flex items-center mt-2 mb-3 sm:mb-0'
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.instagram.com/retistech/'
                >
                <FaInstagram className='mr-2'/>
                <p className='mr-4 hidden sm:block'>Instagram</p>
                </a>

                <a
                className='flex items-center mt-2 mb-3 sm:mb-0'
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.tiktok.com/@retistech'
                >
                <FaTiktok className='mr-2'/>
                <p className='mr-4 hidden sm:block'>TikTok</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Head;