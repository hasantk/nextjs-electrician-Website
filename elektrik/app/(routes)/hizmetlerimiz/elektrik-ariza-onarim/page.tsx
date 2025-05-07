import React from "react";
import Image from "next/image";

const ArizaPage = () => {
  return (
    <div className="container mx-auto px-4 mt-[50px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <span className="font-semibold mb-5 block">İznik Sabit Elektrik</span>
          <h1 className="font-semibold text-4xl sm:text-5xl mb-[35px]">
            Elektrik Arıza Onarım
          </h1>
          <p>
            İznik Sabit Elektrik, Adem Usta yönetiminde, elektrik arıza ve
            onarım hizmetlerinde uzmanlaşmış ekibiyle hızlı ve güvenilir
            çözümler sunmaktadır. Ev, iş yeri ve diğer tüm yaşam alanlarında
            meydana gelen elektrik arızalarına anında müdahale eden firmamız,
            güvenlik ve kaliteyi ön planda tutarak sorunları kalıcı şekilde
            çözmektedir. Kısa devre, priz arızaları, sigorta sorunları ve
            tesisat yenileme gibi konularda tecrübeli ekibimizle, İznik ve
            çevresinde 7/24 hizmet vermekteyiz. Hızlı müdahale, doğru tespit ve
            profesyonel onarım arıyorsanız, İznik Sabit Elektrik sizin için
            doğru tercih!
          </p>
        </div>
        <div className="flex justify-center group overflow-hidden relative aspect-[3/4] max-h-[500px]">
          <Image
            src="/galeri/3.png"
            alt="İznik Elektrik"
            fill
            className="object-cover rounded-xl transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ArizaPage;
