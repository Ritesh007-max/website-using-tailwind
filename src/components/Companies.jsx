import React from "react";
import { FaGoogle, FaFacebook, FaMicrosoft, FaApple, FaGit, FaGithub, FaAmazon } from "react-icons/fa";

function Companies() {
  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold mb-6 py-5">
          Our Trusted Partners...
        </h2>
      </div>

      <div className="flex justify-center items-center gap-4 py-3">

        <FaGoogle className="text-6xl text-blue-700" />
        <FaFacebook className="text-6xl text-blue-900" />
        <FaMicrosoft className="text-6xl text-blue-800" />
        <FaApple className="text-6xl text-gray-700" />
        <FaGithub className="text-6xl text-gray-800" />
        <FaAmazon className="text-6xl text-gray-900" />

      </div>
    </>
  );
}

export default Companies;
