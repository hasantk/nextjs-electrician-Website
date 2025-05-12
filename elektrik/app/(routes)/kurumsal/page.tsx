import React from "react";
import AboutUs from "./_components/AboutUs";
import ElektrikStats from "./_components/ElektrikStats";

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <div className="min-h-[25]"></div>
      <ElektrikStats />
      <div className="min-h-[100] lg:min-h-[180] bg-blue-50"></div>
    </div>
  );
};

export default AboutPage;
