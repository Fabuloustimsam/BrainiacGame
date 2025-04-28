import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function quizButton() {
  return (
    <>
      <div className="py-8 px-5">
        <div className="flex gap-3 text-3xl items-center">
          <div>
            <Link href={"/"}>
              <div className="text-black ml-3">
                <ArrowLeft className="w-9 h-9" />
              </div>
            </Link>
          </div>
          <div className="text-4xl font-serif">Take a quiz</div>
        </div>
        <form className="w-full  gap-2.5 justify-center grid grid-cols-2 h-full">
          <div className="flex flex-col">
            <div>Choose subject</div>
            <select className="border-2 border-gray-300 rounded-lg h-12 w-full">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div>Select topic</div>
            <select className="border-2 border-gray-300 rounded-lg h-12 w-full">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div>Choose question type</div>
            <select className="border-2 border-gray-300 rounded-lg h-12 w-full">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div>Difficulty</div>
            <select className="border-2 border-gray-300 rounded-lg h-12 w-full">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
          </div>

          <button className="bg-purple-600 flex w-[704px] h-[54px] justify-center items-center text-center mx-auto">
            Start Quiz
          </button>
        </form>
      </div>
    </>
  );
}
