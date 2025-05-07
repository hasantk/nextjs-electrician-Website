import React from "react";
import Image from "next/image";

const TesisatPage = () => {
  return (
    <div className="container mx-auto px-4 mt-[50px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <span className="font-semibold mb-5 block">İznik Sabit Elektrik</span>
          <h1 className="font-semibold text-4xl sm:text-5xl mb-[35px]">
            Elektrik Tesisat Kurulumu
          </h1>
          <p>
            İznik Sabit Elektrik, Adem Usta liderliğinde, ev ve iş yerleri için
            güvenli ve profesyonel elektrik tesisat kurulumu hizmeti
            sunmaktadır. Yeni bina projelerinde sıfırdan tesisat döşeme, mevcut
            tesisatların yenilenmesi ve ihtiyaçlara özel altyapı planlamaları
            konusunda uzman ekibimizle hizmet vermekteyiz. Standartlara uygun,
            güvenli ve uzun ömürlü çözümlerle yaşam alanlarınızın enerji
            altyapısını sağlam temeller üzerine kuruyoruz. İznik ve çevresinde
            kaliteli tesisat kurulumu için doğru adres: İznik Sabit Elektrik.
          </p>
        </div>
        <div className="flex justify-center group overflow-hidden relative aspect-[3/4] max-h-[500px]">
          <Image
            src="/galeri/4.png"
            alt="İznik Elektrik"
            fill
            className="object-cover rounded-xl transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default TesisatPage;
