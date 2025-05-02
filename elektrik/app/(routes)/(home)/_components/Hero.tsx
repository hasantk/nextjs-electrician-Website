import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "@/constans";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative bg-[url('/slider/bgswipe.jpg')] bg-cover bg-center py-16">
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
            pagination={{ dynamicBullets: true }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-3xl overflow-hidden w-full min-h-[230px] sm:min-h-[460px] max-h-[50vh]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
