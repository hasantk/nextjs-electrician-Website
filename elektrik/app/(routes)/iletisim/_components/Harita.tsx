"use client";
import React from "react";

const HaritaForm = () => {
  return (
    <div className="w-full h-[550px] mt-[60px] sm:mt-[100px]">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        title="İznik Sabit Elektrik Harita"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3036.861162243839!2d29.726536199999995!3d40.43407309999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1747058171747!5m2!1str!2str"
      />
    </div>
  );
};

export default HaritaForm;
