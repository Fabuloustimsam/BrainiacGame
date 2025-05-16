import Image from "next/image";
import React from "react";

export default function Variety() {
  return (
    <>
      <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center font-serif w-full px-4 py-6">
        Learning can be fun and <br /> engaging!
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 gap-10">
        <div className="flex flex-col gap-6 text-center lg:text-left w-full max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-purple-700">
            Variety of subjects and topics to choose from
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700">
            You can test your knowledge on any topic or subject of your choice.
            Choose the difficulty you want and get your score in real time.
          </p>
        </div>

        <div className="w-full max-w-md lg:max-w-lg">
          <Image
            alt="Girl sitting on floor"
            src="/Girlsittingonfloor.svg"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
