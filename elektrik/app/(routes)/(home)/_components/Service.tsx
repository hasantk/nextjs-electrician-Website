"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "/icon/ampul.png",
    title: "Aydınlatma Çözümleri",
    description:
      "İç ve dış mekanlar için modern ve enerji verimli aydınlatma sistemleri kurulumları.",
  },
  {
    icon: "/icon/cekic.png",
    title: "Elektrik Arıza Onarımı",
    description:
      "Ani arızalar, kısa devreler, sigorta atma sorunları gibi acil durumlar için hızlı müdahale.",
  },
  {
    icon: "/icon/uydu.png",
    title: "Elektrik Tesisatı Kurulumu",
    description:
      "Yeni yapıların elektrik tesisatının kurulumu ve mevcut binalarda iyileştirme çalışmaları.",
  },
  {
    icon: "/icon/avize.png",
    title: "Avize",
    description:
      "Avizelerle mekânlarınıza şıklık katıyor, montaj ve güvenli kurulum sağlıyoruz.",
  },
];

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-[125px] mt-[25px] justify-items-center text-white text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-red-500 hover:bg-red-600 shadow-lg rounded-lg w-full max-w-[350px] h-[250px] pt-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={100}
              height={120}
              priority
            />
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
