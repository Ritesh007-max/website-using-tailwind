import React from "react";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <>
      <div className="w-full py-40 border-2">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 w-full mx-auto bg-amber-400 rounded-full py-2 md:w-[30%]">
            <div className="flex items-center px-2">
              <img
                className="w-8 h-8 rounded-full object-cover object-center"
                src={assets.profile1Img}
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full object-cover object-center"
                src={assets.profile2Img}
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full object-cover object-center"
                src={assets.profile3Img}
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full object-cover object-center"
                src={assets.profile4Img}
                alt=""
              />
            </div>
            <span>Trusted By 10k+ clientvs</span>
          </div>

          <h1 className="text-center text-black/50 text-4x1 mb-8 sm:text-5x1 md: text-6x1 1g:text-7x1">
            We Grow brands with
            <br />
            <span className="text-amber-300">performance</span> strategy
          </h1>

          <p className="text-center mx-w-xl mx-auto font-semibold mb-8">
            {" "}
            at our agency we take pride that we deliver the products which
            contains Creativity, Straergy and technology.
          </p>

          <div className="flex items-center justify-center gap-8">
            <button className="p-3 bg-amber-300 rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer">
              Contact Us
            </button>

            <button className="p-3 bg-cyan-950 rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer">
              Feedback
            </button>
          </div>

          <div className="mt-15 mx-w-5x1 mx-auto shadow-overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-center"
              src={assets.heroImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
