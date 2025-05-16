import Image from "next/image";
import React from "react";

export default function GrannySec() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-10 lg:px-20 gap-10 py-10">
      {/* Image Section */}
      <div className="w-full max-w-md lg:max-w-lg">
        <Image
          alt="Granny"
          src="/Granny.svg"
          width={504}
          height={504}
          className="w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 justify-center text-center lg:text-left w-full max-w-xl">
        <h2 className="font-semibold font-serif text-purple-700 text-2xl sm:text-3xl lg:text-4xl">
          Earn points, Climb the leaderboard
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-serif text-gray-700">
          Brainiac makes learning fun by giving you points and badges as you
          answer more quizzes correctly.
        </p>
      </div>
    </div>
  );
}
