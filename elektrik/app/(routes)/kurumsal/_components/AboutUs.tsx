import { Button } from "@/components/ui/button";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-red-100">
      <div className="mx-auto container text-center py-16 px-16 lg:px-28">
        <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
          Welcome
        </h2>
        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          consequatur expedita sint, labore suscipit, dolores voluptatum odit a
          totam dolorum inventore eveniet necessitatibus excepturi rerum! Fuga
          nostrum ipsam qui commodi cupiditate ut dignissimos quas accusamus,
          quibusdam vel in unde non sed! Atque laboriosam dolorum explicabo
          aspernatur hic vero natus.
        </p>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          consequatur expedita sint, labore suscipit, dolores voluptatum odit a
          totam dolorum inventore eveniet necessitatibus excepturi rerum! Fuga
          nostrum ipsam qui commodi cupiditate ut dignissimos quas accusamus,
          quibusdam vel in unde non sed! Atque laboriosam dolorum explicabo
          aspernatur hic vero natus.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
            Detail
          </Button>
          <Button className="bg-red-500 text-white py-6 px-8 rounded-lg hover:bg-red-600 transition">
            Browse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
