"use client";
import Hero from "./_components/Hero";
import Referance from "./_components/Referance";
import SectionOne from "./_components/Section/SectionOne";
import Service from "./_components/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-[24px]"></div>
      <Service />
      <div className="min-h-[56px]"></div>
      <SectionOne />
      <div className="min-h-[56px]"></div>
      <Referance />
      <div className="min-h-[250px]"></div>
    </>
  );
}
