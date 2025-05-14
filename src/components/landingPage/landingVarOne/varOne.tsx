import Image from "next/image";
import React from "react";

export default function Varone() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-4 sm:px-10 lg:px-20 gap-10 py-10">
      {/* Text Content */}
      <div className="flex flex-col gap-6 justify-center text-center lg:text-left w-full max-w-xl">
        <h2 className="font-semibold font-serif text-purple-700 text-2xl sm:text-3xl lg:text-4xl">
          May the smartest in the circle win!
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-serif text-gray-700">
          Challenge your friends to participate in a quiz and may the smartest
          earn the winner badge.
        </p>
      </div>

      {/* Image */}
      <div className="w-full max-w-md lg:max-w-lg">
        <Image
          alt="friends"
          src="/Frame 14.svg"
          width={567}
          height={567}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
