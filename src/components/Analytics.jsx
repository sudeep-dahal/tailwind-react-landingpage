import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/"></img>
        <div className="flex flex-col justify-center">
          <p className="text-green-600 font-bold">SUDEEP DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Meet personally with Sudeep
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugit distinctio praesentium ullam laborum suscipit nostrum ut
            expedita necessitatibus temporibus, totam velit ex? Deleniti
            repellendus animi sapiente repellat est? Deleniti.
          </p>
          <button className="bg-black text-green-400 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
