import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { slides } from "@/constans";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative bg-[url('/slider/bgswipe.jpg')] bg-cover py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left px-6 transition-all duration-500">
          <h4 className="text-red-600 font-bold text-lg">
            Bizimle İletişime Geçin
          </h4>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-800 text-base md:text-lg">
            {slides[currentSlide].description}
          </p>
          <Button className="bg-red-500 hover:bg-red-600 w-[100px]">
            {slides[currentSlide].buttonText}
          </Button>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 w-full">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true} // Bittiğinde başa dönsün
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={425}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
