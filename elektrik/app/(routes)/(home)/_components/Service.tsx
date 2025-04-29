import Image from "next/image";
import React from "react";

const service = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-[125px] mt-[25px] justify-items-center text-white text-center">
        <div className=" bg-red-500 hover:bg-red-600 border-[0,50px] shadow-lg rounded-lg w-[350px] h-[250px] justify-items-center pt-3">
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
        <div className=" bg-red-500 hover:bg-red-600 border-[0,50px] shadow-lg rounded-lg w-[350px] h-[250px] justify-items-center pt-3">
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
        <div className=" bg-red-500 hover:bg-red-600 border-[0,50px] shadow-lg rounded-lg w-[350px] h-[250px] justify-items-center pt-3">
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
        <div className=" bg-red-500 hover:bg-red-600 border-[0,50px] shadow-lg rounded-lg w-[350px] h-[250px] justify-items-center pt-3">
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

export default service;
