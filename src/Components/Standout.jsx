import React from 'react';
import Image from 'next/image';
import { Lora, Poppins, Pacifico, Charm, Playfair_Display, Dancing_Script, Raleway, Merriweather, Great_Vibes, Satisfy, Montserrat } from 'next/font/google';

// Configure fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' }); // Remove weight specification
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const charm = Charm({ subsets: ['latin'], weight: ['400', '700'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400', }); 
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({ subsets: ['latin'] });


const Standout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-10 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-[#07294C] to-[#084D92]">
      {/* Main Title with Pacifico */}
      <h1 className={`text-3xl lg:text-6xl sm:text-4xl lg:mb-14 text-white text-center mb-8 mt-10 ${poppins.className}`}>
        Why we stand out
      </h1>

      <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 sm:justify-center">
        {/* Card 1 */}
        <div className="w-full max-w-md sm:w-72 lg:w-80 p-6 bg-[#FFEC80] rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <Image src="/image/icon4.png" alt="Icon 8" width={64} height={64} className="mx-auto" />
          </div>
          {/* Apply Lora to card titles */}
          <h1 className={`text-xl sm:text-2xl font-semibold mb-4 ${lora.className}`}>
            Integrated Digital Strategy
          </h1>
          <p className="text-sm sm:text-base  text-[#07294C] leading-relaxed font-serif">
            At Retis Systems, we offer a comprehensive approach to digital strategy by seamlessly integrating digital marketing, cybersecurity, software development, and training.
            Our holistic solutions ensure that every aspect of your business's digital presence is optimized for success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-md sm:w-72 lg:w-80 p-6 bg-[#FFEC80] rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <Image src="/image/icon7.png" alt="Icon 6" width={64} height={64} className="mx-auto" />
          </div>
          <h1 className={`text-xl sm:text-2xl font-semibold mb-4 ${lora.className}`}>
            Expert Insight and Innovation
          </h1>
          <p className="text-sm sm:text-base text-[#07294C] leading-relaxed font-serif">
            Partnering with Retis Systems means gaining access to a team of experts who are committed to driving innovation and providing valuable insights.
            Our forward-thinking approach ensures your business stays ahead in the competitive digital economy.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-md sm:w-72 lg:w-80 p-6 bg-[#FFEC80] rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <Image src="/image/icon1.png" alt="Icon 4" width={64} height={64} className="mx-auto" />
          </div>
          <h1 className={`text-xl sm:text-2xl font-semibold mb-4 ${lora.className}`}>
            Reliable Security Solutions
          </h1>
          <p className="text-sm sm:text-base text-[#07294C] leading-relaxed font-serif">
            In an era where digital threats are increasingly sophisticated, Retis Systems prioritizes your business's security.
            Our cutting-edge cybersecurity services protect your assets, allowing you to focus on growth with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Standout;
