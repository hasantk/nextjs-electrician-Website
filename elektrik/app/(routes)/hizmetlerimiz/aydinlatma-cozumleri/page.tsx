import React from "react";
import Image from "next/image";

const AydinlatmaPage = () => {
  return (
    <div className="container mx-auto px-4 mt-[50px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <span className="font-semibold mb-5 block">İznik Sabit Elektrik</span>
          <h1 className="font-semibold text-4xl sm:text-5xl mb-[35px]">
            Aydınlatma Çözümleri
          </h1>
          <p>
            İznik Sabit Elektrik, Adem usta yönetiminde, aydınlatma ve elektrik
            sistemleri konusunda uzmanlaşmış ekibiyle kaliteli ve güvenilir
            hizmet sunmaktadır. Ev, iş yeri ve açık alan aydınlatmalarında
            modern çözümler üreten firmamız, estetik ve işlevselliği bir araya
            getirerek yaşam alanlarını aydınlatıyor. Projelendirmeden montaja
            kadar her aşamada titizlikle çalışan ekibimiz, zamanında teslimat ve
            müşteri memnuniyetini esas almaktadır. İznik ve çevresinde elektrik
            & aydınlatma alanında güvenilir bir çözüm ortağı arıyorsanız, İznik
            Sabit Elektrik doğru adres!
          </p>
        </div>
        <div className="flex justify-center group overflow-hidden relative aspect-[3/4] max-h-[500px]">
          <Image
            src="/galeri/6.png"
            alt="İznik Elektrik"
            fill
            className="object-cover rounded-xl transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default AydinlatmaPage;
