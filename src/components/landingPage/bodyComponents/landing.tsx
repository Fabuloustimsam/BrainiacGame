import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex mt-5 justify-between w-full px-10 items-center ">
      <div className="flex flex-col ">
        <div className="text-5xl font-serif w-[612px] font-black">
          The Smartest game on the Internet!
        </div>
        <div className="py-7 text-xl w-[612px]">
          Put your knowledge to the test with fun and challenging quizzes across
          a variety of topics.
        </div>
        <button className="w-80 h-14 border text-purple-700 font-serif border-purple-700">
          {" "}
          Take a quick quiz
        </button>
      </div>
      <Image alt="logo" src={"/Heroimage.svg"} width={612} height={132} />
    </div>
  );
}
