import React from 'react';
import { 
  Montserrat, Roboto, Dancing_Script, Pacifico, Charm, 
  Lora, Poppins, Playfair_Display, Raleway, Merriweather, Great_Vibes, Satisfy
} from 'next/font/google';

import Hero from '@/Components/HeroSection/Hero';
import Navbar from '@/Components/Navbar'; 
import Movingsec from '@/Components/Movingsec';
import Standout from '@/Components/Standout';
import Pricings from '@/Components/Pricings';
import Ourteam from '@/Components/Ourteam';
import Testimonials from '@/Components/Testimonials';
import Footer from '@/Components/Footer/Footer';
import Vision from '@/Components/Vision';
import About from '@/Components/About';
import Head from '@/Components/Head';

// Font configurations
const montserrat = Montserrat({ subsets: ['latin']  });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });
const charm = Charm({ subsets: ['latin'], weight: ['400', '700'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' }); // Remove weight specification
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400', });
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

const Home = () => {
  return (
    <main className={roboto.className}>
      <Head />
      <Navbar />
      <Hero  />
      <Movingsec />
      <Vision  />
      <About />
      <Standout />
      <Pricings />
      <Ourteam />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
