import Image from "next/image";
import React from "react";

export default function SemiFooter() {
  return (
    <div className="w-full bg-yellow-600 relative flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8">
      {/* Background Curl Image */}
      <Image
        alt="curl vector"
        src="/Vectorcurl.svg"
        width={1473}
        height={148}
        className="w-full h-auto absolute top-0 left-0"
      />

      {/* Content */}
      <div className="z-10 mt-10 flex flex-col items-center justify-center">
        <h2 className="text-purple-700 text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
          Learning is Fun and Interactive <br className="hidden sm:block" />{" "}
          with Brainiac
        </h2>

        <button className="bg-purple-700 rounded-xl text-white text-base sm:text-lg lg:text-xl font-black font-sans px-8 sm:px-12 py-4 sm:py-5 mt-6">
          Get started
        </button>
      </div>
    </div>
  );
}
