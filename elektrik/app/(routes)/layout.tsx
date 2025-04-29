"use client";
import Footer from "@/components/sections/footer/Footer";
import Header from "@/components/sections/header/Header";
import React from "react";
import Hero from "./(home)/_components/Hero";

interface RouteLayoutProps {
  children: React.ReactNode;
}
const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RouteLayout;
