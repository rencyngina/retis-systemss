import { FaCheckCircle } from "react-icons/fa";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  Lora,
  Poppins,
  Pacifico,
  Charm,
  Playfair_Display,
  Dancing_Script,
  Raleway,
  Merriweather,
  Great_Vibes,
  Satisfy,
  Montserrat,
} from "next/font/google";
import Head from "@/Components/Head";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" }); // Remove weight specification
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const charm = Charm({ subsets: ["latin"], weight: ["400", "700"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <Head />
      <Navbar />
      <div className="flex flex-col h-auto ">
        {/* Purple Background Section */}
        <div className="bg-[#ffe55c] w-full min-h-[60vh] py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-6 xl:p-12 lg:p-8">
            {/* Left Section: Text */}
            <div className="lg:w-1/3 max-h-[45vh] overflow-hidden">
              <h1 className="text-2xl lg:text-3xl text-yellow-600  flex justify-center items-center text-center lg:mb-10 mb-8">
                Financial Planning Services
              </h1>
              <p className="text-lg lg:text-xl font-medium  flex justify-center items-center text-center text-[#8B3F91]">
                Sovereign Wealth Management offers financial planning and
                discretionary portfolio management services.
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

      {/* About Us Container (Adjusted Position) */}
      <div className="relative -mt-16">
        <div className="mx-auto w-[90%] lg:w-3/4 bg-white shadow-sm p-6 lg:p-12 ">
          <h2
            className={`text-3xl lg:text-5xl font-bold text-[#083c71] mb-4 flex items-center justify-center ${montserrat.className}`}
          >
            About Us
          </h2>
          <div className="w-full h-1 bg-yellow-500 mb-4  flex items-center justify-center"></div>
          <p className="text-lg text-gray-600 leading-relaxed flex items-center justify-center font-light">
            At Retis Systems Limited, we are committed to empowering businesses
            and individuals through cutting-edge information security, software
            development, and online marketing solutions. Our goal is to help
            clients innovate, grow, and stay resilient in the ever-evolving
            digital landscape.
          </p>
          <p className="text-lg text-gray-600 mt-4 flex items-center justify-center font-light">
            With a strong focus on cybersecurity and digital transformation, we
            provide tailored, high-impact solutions that safeguard businesses
            from cyber threats, enhance operational efficiency, and maximize
            online visibility. From penetration testing and digital forensics to
            custom software development and strategic digital marketing, we
            ensure our clients stay ahead of the competition while maintaining
            security and compliance.
          </p>

          {/* Our Mantra Section */}
          <div className="mt-8">
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#083c71] mb-4 flex items-center justify-center ${montserrat.className}`}
            >
              Our Mantra
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              At Retis Systems, we believe in the power of collaboration,
              ethical excellence, and innovation. Our mantra,{" "}
              <strong>“Shining Together,”</strong> reflects our commitment to:
            </p>
            <ul className="text-lg text-gray-600 mt-4 list-none font-light">
              <li className="flex items-center">
                <FaCheckCircle className="text-black mr-2" />
                <strong>Empowerment –</strong> Equipping clients with the tools
                and knowledge to succeed.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-black mr-2" />
                <strong>Innovation –</strong> Developing cutting-edge solutions
                for unique challenges.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-black mr-2" />
                <strong>Security & Resilience –</strong> Protecting businesses
                with proactive cybersecurity strategies.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-black mr-2" />
                <strong>Ethical Excellence –</strong> Building trust through
                transparency and compliance.
              </li>
            </ul>
          </div>

          {/* Core Services Section */}
          <div className="mt-8">
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#083c71] mb-4 flex items-center justify-center ${montserrat.className}`}
            >
              Our Core Services
            </h3>
            <ul className="text-lg text-gray-600 list-disc list-inside font-light">
              <li>
                <strong>Information Security –</strong> Cybersecurity
                consulting, digital forensics, penetration testing, and
                compliance solutions.
              </li>
              <li>
                <strong>Software Development –</strong> Custom software, web and
                mobile applications, cloud solutions, and enterprise software.
              </li>
              <li>
                <strong>Online Marketing Strategy –</strong> SEO, social media
                marketing, digital advertising, content marketing, and brand
                growth strategies.
              </li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-8">
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#083c71] mb-4 flex items-center justify-center ${montserrat.className}`}
            >
              Why Choose Retis Systems?
            </h3>
            <ul className="text-lg text-gray-600 list-disc list-inside font-light">
              <li>
                <strong>Industry Experts –</strong> A skilled team of
                cybersecurity specialists, software engineers, and digital
                marketing professionals.
              </li>
              <li>
                <strong>Client-Centric Approach –</strong> Tailored solutions
                designed to meet unique business needs.
              </li>
              <li>
                <strong>Regulatory Compliance –</strong> Adherence to
                cybersecurity, data protection, and industry regulations.
              </li>
              <li>
                <strong>Continuous Innovation –</strong> Staying ahead of trends
                to provide the latest technological advancements.
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-600 mt-6 font-light">
            We are dedicated to helping businesses thrive in a secure and
            digitally optimized world. Partner with us and let’s shine together!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
