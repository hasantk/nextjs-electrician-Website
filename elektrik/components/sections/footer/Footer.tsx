import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "aos/dist/aos.css";

const Footer = () => {
  const galeriImages = Array.from(
    { length: 5 },
    (_, index) => `/galeri/${index + 1}.png`
  );

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute -top-18 left-1/2 transform -translate-x-1/2 bg-red-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72 grid grid-cols-1 md:grid-cols-2 items-center gap6">
        <div>
          <h2 className="text-3xl font-bold">Elektrik sorunları beklemez!</h2>
          <p className="mt-2 text-lg">
            Hemen iletişime geçin, hızlı ve güvenilir çözümlerle tanışın.
          </p>
          <Link href="tel:+905395980668">
            <Button className="mt-4 bg-white text-red-500 px-6 py-2 font-semibold rounded shadow-md">
              Hemen Ara
            </Button>
          </Link>
        </div>
        <div
          className="flex justify-center relative"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Image
            height={426}
            width={536}
            src="/elektrikfooter.jpg"
            alt="İznik Elektrik"
            className="hidden md:block absolute w-full -bottom-28"
          />
        </div>
      </div>
      <div></div>
      <div className="container mx-auto py-56 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2 mt-15">
          <h3 className="text-2xl font-bold">Sabit Elektrik</h3>
          <p className="mt-4 text-sm text-gray-400">
            Müşterilerimizin elektrik ihtiyaçlarını güvenli ve verimli bir
            şekilde karşılamak, yüksek kaliteli işçilikle her projeyi zamanında
            tamamlamaktır.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 mt-15">Site Haritası</h4>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <Link href={"/"} className={"hover:text-red-500"}>
              {"Anasayfa"}
            </Link>
            <Link href={"/kurumsal"} className={"hover:text-red-500"}>
              {"Kurumsal"}
            </Link>
            {/* Hizmetler Accordion Menü */}
            <Accordion type="single" collapsible className="w-[50] -mt-4 -mb-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Hizmetlerimiz</AccordionTrigger>
                <div className="w-[150]">
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/aydinlatma-cozumleri">
                      Aydınlatma Çözümleri
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/elektrik-ariza-onarim">
                      Elektrik Arıza Onarım
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/elektrik-tesisat-kurulumu">
                      Elektrik Tesisat Kurulumu
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/avize">Avize</Link>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
            <Link href={"/iletisim"} className={"hover:text-red-500"}>
              {"İletişim"}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 mt-15">
          <h3 className="text-2xl font-bold">Galeri</h3>
          <div className="grid grid-cols-3 gap-2">
            {" "}
            {/* 3 tane yan yana resim gelcek */}
            {galeriImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={50}
                height={50}
                alt="İznik sabit elektrik"
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 mt-15 text-gray-400">
          <h4 className="text-xl text-white font-bold mb-4">İletişim</h4>
          <p className="text-sm mb-4">
            Yeşil Camii Mahallesi Topkapı Caddesi No: 20/A İznik/Bursa
          </p>
          <div className="flex md:flex-col flex-row gap-3 mt-[40px]">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-red-500" />
              <span className="text-sm">iletisim@izniksabitelektrik.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-red-500" />
              <span className="text-sm">+90 539 598 0668</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 text-center text-sm border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-red-500">İznik Sabit Elektrik.</span> Tüm
            hakları saklıdır.
          </div>
          <div>
            <Link href="http://www.sabitbilisim.com/">
              <span className="text-red-500">Sabit Bilişim</span>
            </Link>{" "}
            Tarafından Yapılmıştır.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
