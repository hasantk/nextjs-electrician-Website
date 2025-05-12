import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 lg:hidden bg-red-500 cursor-pointer text-white rounded-full">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="text-center font-bold">
        <SheetTitle className="text-4xl text-red-500 pt-15">
          Sabit Elektrik
        </SheetTitle>
        <div className="mt-8 flex flex-col gap-4">
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
          {/* Hizmetler Accordion Menü */}
          <div className="flex justify-center">
            <Accordion
              type="single"
              collapsible
              className="w-[80px] -mt-4 -mb-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span
                    className={`${
                      pathname === "/hizmetlerimiz"
                        ? "text-red-500"
                        : "hover:text-red-500"
                    } w-full text-center font-bold text-md`}
                  >
                    Hizmetlerimiz
                  </span>
                </AccordionTrigger>
                <div className="w-[150px] mx-auto text-start">
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/iznik-aydinlatma-cozumleri">
                      Aydınlatma Çözümleri
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/iznik-elektrik-ariza-onarim">
                      Elektrik Arıza Onarım
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/iznik-elektrik-tesisat-kurulumu">
                      Elektrik Tesisat Kurulumu
                    </Link>
                  </AccordionContent>
                  <AccordionContent className="hover:text-red-500">
                    <Link href="/hizmetlerimiz/iznik-avize">Avize</Link>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          <Link
            href={"/iletisim"}
            className={`${
              pathname === "/iletisim" ? "text-red-500" : "hover:text-red-500"
            }`}
          >
            {"İletişim"}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
