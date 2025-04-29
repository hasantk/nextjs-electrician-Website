import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-[50px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full ml-2">
          <span className="font-semibold mb-5 block">İznik Sabit Elektrik</span>
          <h3 className="font-semibold text-5xl mb-[35px]">Kurumsal</h3>
          <p>
            İznik Sabit Elektrik, elektrik alanında uzman kadrosu ve yıllara
            dayanan tecrübesiyle müşterilerine profesyonel çözümler sunmaktadır.
            Kaliteli malzeme kullanımı, güvenlik odaklı yaklaşımı ve zamanında
            teslim anlayışı ile sektörde güven kazanmıştır. Hem bireysel hem de
            kurumsal projelerde ihtiyaçlara özel çözümler sunarak müşteri
            memnuniyetini ön planda tutmaktadır.
          </p>
        </div>
        <div className="flex justify-center group overflow-hidden relative">
          <Image
            src="/galeri/6.png"
            alt="İznik Elektrik"
            width={460}
            height={370}
            className="w-full h-auto max-w-[460px] rounded-xl transtion duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
