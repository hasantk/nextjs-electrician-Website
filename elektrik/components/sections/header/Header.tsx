"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import SearchPage from "./Search";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [position, setPosition] = React.useState("bottom");
  const pathname = usePathname();
  const socialLinks = [
    { href: "#", icon: <Facebook size={16} /> },
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
  ];
  return (
    <header className="bg-black text-white">
      {/* Top Bar */}
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-red-500" />
            </div>
            iletisim@izniksabitelektrik.com
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-red-500" />
            </div>
            +90 539 598 0668
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-red-500">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      {/** Navigation Bar */}
      <div className="bg-white h-28 text-black shadow flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="İznik Elektrik"
              width={210}
              height={50}
              className="w-32 lg:w-48 h-auto z-1"
            />
          </Link>
          <nav className="hidden lg:flex space-x-8 text-lg font-semibold">
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {"Anasayfa"}
            </Link>
            <Link
              href={"/kurumsal"}
              className={`${
                pathname === "/kurumsal" ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {"Kurumsal"}
            </Link>
            {/* Hizmetler Dropdown Menü */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  href={"/hizmetlerimiz"}
                  className={`${
                    pathname === "hizmetlerimiz"
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  Hizmetlerimiz
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Hizmet Kategorileri</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={"/hizmetlerimiz/iznik-aydinlatma-cozumleri"}
                    className={`${
                      pathname === "/hizmetlerimiz/iznik-aydinlatma-cozumleri"
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    Aydınlatma Çözümleri
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/hizmetlerimiz/iznik-elektrik-ariza-onarim"}
                    className={`${
                      pathname === "/hizmetlerimiz/iznik-elektrik-ariza-onarim"
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    Elektrik Arıza Onarımı
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/hizmetlerimiz/iznik-elektrik-tesisat-kurulumu"}
                    className={`${
                      pathname ===
                      "/hizmetlerimiz/iznik-elektrik-tesisat-kurulumu"
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    Elektrik Tesisatı Kurulumu
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/hizmetlerimiz/iznik-avize"}
                    className={`${
                      pathname === "/hizmetlerimiz/iznik-avize"
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    Avize
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={"/iletisim"}
              className={`${
                pathname === "/iletisim" ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {"İletişim"}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <SearchPage />
            <Button className="hidden lg:flex bg-red-500 hover:bg-red-600 w-40 h-15 font-semibold text-base rounded-lg">
              <Link href="https://wa.me/905395980668?text=Merhaba, elektrik arızası ile ilgili destek almak istiyorum. Yardımcı olabilir misiniz?">
                İletişime geç
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
