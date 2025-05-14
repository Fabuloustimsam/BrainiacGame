import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-5 px-6 md:px-10 items-center justify-between w-full gap-10">
      <div className="flex flex-col text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black max-w-xl">
          The Smartest Game on the Internet!
        </h1>
        <p className="py-5 text-base sm:text-lg lg:text-xl max-w-xl">
          Put your knowledge to the test with fun and challenging quizzes across
          a variety of topics.
        </p>
        <Link href="/quizButton">
          <button className="w-full sm:w-72 h-14 border rounded-2xl hover:bg-purple-400 hover:transition-all text-purple-700 font-serif border-purple-700">
            Take a Quick Quiz
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Image
          alt="Hero image"
          src="/Heroimage.svg"
          width={612}
          height={132}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
        />
      </div>
    </div>
  );
}
