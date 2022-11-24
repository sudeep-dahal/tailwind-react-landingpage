import React from "react";

import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green-400 font-bold p-2">VIBING WITH SUDEEP</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Sudeep is Awesome{" "}
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl font-bold py-4">
            {" "}
            Talented, Reliable and{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl font-bold pl-2 md:pl-4"
            strings={["Dami", "Cool"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <button className="bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Don't click me
        </button>
      </div>
    </div>
  );
};

export default Hero;
