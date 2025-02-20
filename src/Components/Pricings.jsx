import React from "react";
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

const Pricings = () => {
  const plans = [
    {
      title: "Digital Marketing",
      features: [
        "Basic digital solution",
        "Introductory training modules",
        "Essential cybersecurity protection",
      ],
      image: "/image/cyber.jpg",
    },
    {
      title: "Software Development",
      features: [
        "Advanced marketing strategies",
        "Enhanced security features",
        "Comprehensive software tools",
      ],
      image: "/image/software.jpg",
    },
    {
      title: "Cybersecurity",
      features: [
        "Customized digital strategies",
        "Full-scale development services",
        "Premium security protocols",
      ],
      image: "/image/marketing.jpg",
    },
    {
      title: "Training",
      features: [
        "Basic digital solution",
        "Introductory training modules",
        "Essential cybersecurity protection",
      ],
      image: "/image/cyber.jpg",
    },
  ];

  return (
    <div className="lg:min-h-[70vh] min-h-[50vh]">
      {/* Background Image with Curved Top and Sticky Effect */}
      <div
        className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: "url('/image/jap.jpg')",
         }}
      >
      <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust opacity for darkness
    }}
  ></div>
        {/* Curved Top */}
        <svg
          className="absolute top-0 left-0 w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(8,75,144)"
            d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,133.3C840,107,960,53,1080,42.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        {/* Content */}
        <div className="flex flex-col items-center justify-center lg:min-h-[90vh] min-h-[50vh] lg:p-4 p-8">
          <h1
            className="lg:text-7xl text-2xl lg:font-bo font-montserrat text-center text-white relative lg:mb-24 mb-20 mt-8"
          >
            Our services
          </h1>

          {/* Pricing Cards - Adjusted for One Row */}
          <div className="flex justify-center gap-6 px-6 max-w-screen-xl -mt-8 flex-wrap">
            {plans.map((plan, index) => (
              <article
                key={index}
                className="relative w-[250px] h-[300px] rounded-[20px] bg-cover bg-center  overflow-hidden group"
                style={{ backgroundImage: `url(${plan.image})` }}
              >
                {/* Reduced Darkness for Better Image Clarity */}
                <div className="absolute duration-300"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 group-hover:h-full transition-all duration-500 bg-black/90 text-white p-4 rounded-tl-[42px] overflow-hidden shadow-md">
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                  <p className="text-yellow-400 text-lg font-semibold">
                    {plan.price}
                  </p>
                  <ul className="text-sm mt-2 space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-[#8B3F91] rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Curved Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,160L120,133.3C240,107,480,53,720,64C960,75,1200,149,1320,186.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pricings;
