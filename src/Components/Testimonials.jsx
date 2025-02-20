import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: '/image/ceo.jpg',
    text: 'Testimonial text 1',
    icon: '/path-to-icon1.png'
  },
  {
    image: '/image/ceo3.avif',
    text: 'Testimonial text 2',
    icon: '/path-to-icon2.png'
  },
  {
    image: '/image/ceo5.avif',
    text: 'Testimonial text 3',
    icon: '/path-to-icon3.png'
  },
  {
    image: '/image/ceo4.avif',
    text: 'Testimonial text 4',
    icon: '/path-to-icon4.png'
  },
  {
    image: '/image/ceo3.avif',
    text: 'Testimonial text 5',
    icon: '/path-to-icon5.png'
  },
  {
    image: '/image/ceo8.avif',
    text: 'Testimonial text 6',
    icon: '/path-to-icon6.png'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 mb-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg roun overflow-hidden">
        <div className="w-full md:w-1/2 h-64 relative overflow-hidden">
          <img 
            src={testimonials[current].image} 
            alt="testimonial" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <p className="text-lg text-gray-700">{testimonials[current].text}</p>
          <img 
            src={testimonials[current].icon} 
            alt="company icon" 
            className="w-12 h-12 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;