import { siteMetadata } from "@/lib/siteMetadata";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: "Hakkımızda Sayfası",
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};
const About = () => {
  return (
    <div className="container mx-auto px-4 mt-[50px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <span className="font-semibold mb-5 block">İznik Sabit Elektrik</span>
          <h3 className="font-semibold text-4xl sm:text-5xl mb-[35px]">
            Kurumsal
          </h3>
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
            width={350} // width ve height burada gereksiz, Tailwind ile kontrol sağlanıyor
            height={320}
            className="w-full h-auto max-w-[90%] sm:max-w-[400px] rounded-xl transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
