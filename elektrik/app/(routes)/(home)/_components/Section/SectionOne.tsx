import Image from "next/image";
import React from "react";
import "aos/dist/aos.css";

const SectionOne = () => {
  return (
    <div className="mx-auto container lg:mt-8 md:mt-10 mt-5">
      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28">
        <div
          className="group overflow-hidden relative"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <Image
            src="/home/1.png"
            alt=""
            width={1260}
            height={590}
            className="rounded-xl transtion duration-300 group-hover:scale-110"
          />
        </div>
        <div
          className="group overflow-hidden relative"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <Image
            src="/home/2.png"
            alt=""
            width={1250}
            height={600}
            className="rounded-xl transtion duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
