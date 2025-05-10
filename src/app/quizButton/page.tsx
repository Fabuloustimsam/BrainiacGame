"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function QuizButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <div className="rounded-full animate-spin mb-8">
          <Image alt="logo" src={"/brain.svg"} width={12} height={12} />
        </div>
        <h2 className="text-2xl font-medium text-gray-700 mb-2 font-serif">
          Preparing your Quiz
        </h2>
      </div>
    );
  }

  return (
    <div className="py-8 px-5 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-medium text-gray-700">Take quick quiz</h1>
      </div>

      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="mb-2 text-gray-700 font-normal text-sm"
            >
              choose Subject
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
                defaultValue="English"
              >
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="topic"
              className="mb-2 text-gray-700 font-normal text-sm"
            >
              Select topic
            </label>
            <div className="relative">
              <select
                id="topic"
                name="topic"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
                defaultValue="Nouns"
              >
                <option value="Nouns">Nouns</option>
                <option value="Verbs">Verbs</option>
                <option value="Adjectives">Adjectives</option>
                <option value="Adverbs">Adverbs</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="questionType"
              className="mb-2 text-gray-700 font-normal text-sm"
            >
              Choose question type
            </label>
            <div className="relative">
              <select
                id="questionType"
                name="questionType"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
                defaultValue="MCQ"
              >
                <option value="MCQ">MCQ</option>
                <option value="TrueFalse">True/False</option>
                <option value="Essay">Essay</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="difficulty"
              className="mb-2 text-gray-700 font-normal text-sm"
            >
              Difficulty
            </label>
            <div className="relative">
              <select
                id="difficulty"
                name="difficulty"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
                defaultValue="Easy"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-purple-500 font-bold text-white rounded-lg hover:bg-purple-600 transition-colors mt-6"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}
