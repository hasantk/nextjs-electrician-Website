"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animasyon süresi (ms)
      once: true, // bir kez oynasın (scroll ile tekrar tetiklenmesin)
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-[125px] mt-[25px] justify-items-center text-white text-center">
        <div
          className="bg-red-500 hover:bg-red-600 border border-transparent shadow-lg rounded-lg w-full max-w-[350px] h-[250px] justify-items-center pt-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/icon/ampul.png"
            alt="Ev Aydınlatma"
            width={100}
            height={120}
          />
          <h3 className="font-semibold text-lg">Aydınlatma Çözümleri</h3>
          <p>
            İç ve dış mekanlar için modern ve enerji verimli aydınlatma
            sistemleri kurulumları.
          </p>
        </div>
        <div
          className="bg-red-500 hover:bg-red-600 border border-transparent shadow-lg rounded-lg w-full max-w-[350px] h-[250px] justify-items-center pt-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/icon/cekic.png"
            alt="Ev Aydınlatma"
            width={100}
            height={120}
          />
          <h3 className="font-semibold text-lg">Elektrik Arıza Onarımı</h3>
          <p>
            Ani arızalar, kısa devreler, sigorta atma sorunları gibi acil
            durumlar için hızlı müdahale.
          </p>
        </div>
        <div
          className="bg-red-500 hover:bg-red-600 border border-transparent shadow-lg rounded-lg w-full max-w-[350px] h-[250px] justify-items-center pt-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/icon/uydu.png"
            alt="Ev Aydınlatma"
            width={100}
            height={120}
          />
          <h3 className="font-semibold text-lg">Elektrik Tesisatı Kurulumu</h3>
          <p>
            Elektrik Tesisatı Kurulumu Yeni yapıların elektrik tesisatının
            kurulumu ve mevcut binalarda iyileştirme çalışmaları.
          </p>
        </div>
        <div
          className=" bg-red-500 hover:bg-red-600 border border-transparent shadow-lg rounded-lg w-full max-w-[350px] h-[250px] justify-items-center pt-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Image src="/icon/avize.png" alt="Avize" width={100} height={120} />
          <h3 className="font-semibold text-lg">Avize</h3>
          <p>
            Avizelerle mekânlarınıza şıklık katıyor, montaj ve güvenli kurulum
            sağlıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
