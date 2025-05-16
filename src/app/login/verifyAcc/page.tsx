"use client";

import { Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

function VerifyAccContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      if (index < 4) {
        inputsRef.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      e.key === "Backspace" &&
      !(e.target as HTMLInputElement).value &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, 5);
    const digits = paste.match(/\d/g);
    if (digits) {
      digits.forEach((digit: string, i: number) => {
        if (inputsRef.current[i]) {
          inputsRef.current[i]!.value = digit;
        }
      });
      const nextInput = inputsRef.current[digits.length];
      if (nextInput) nextInput.focus();
    }
    e.preventDefault();
  };

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-5xl font-serif pt-10 mb-6">
        Verify your account
      </h1>

      <div className="flex flex-col gap-10 font-serif max-w-xl w-full">
        <p className="text-lg sm:text-2xl font-bold">
          We sent a 5 digit confirmation code to{" "}
          <span className="text-yellow-700">{email}</span>. Please enter it
          below to confirm your account.
        </p>

        <div
          className="flex justify-center gap-4 sm:gap-6 flex-wrap"
          onPaste={handlePaste}
        >
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-14 h-14 sm:w-20 sm:h-20 text-3xl sm:text-5xl text-center border border-yellow-600 focus:outline-none"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => {
                inputsRef.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 text-sm sm:text-base">
          <span>Didn’t receive a code?</span>
          <span className="font-black underline cursor-pointer">
            Send code again
          </span>
        </div>
      </div>

      <div className="text-sm text-center max-w-xs mt-10 font-serif">
        By creating an account you accept Brainiac&apos;s{" "}
        <span className="text-purple-700">Terms of Services</span> and{" "}
        <span className="text-purple-700">Privacy Policy</span>.
      </div>
    </div>
  );
}

export default function VerifyAccPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="w-full md:w-1/2 bg-purple-700 rounded-2xl py-6 px-4 flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <ArrowLeft className="text-white w-5 h-5" />
          </Link>
          <Image alt="logo" src="/whitebrainiac.svg" width={180} height={50} />
        </div>

        <div className="flex flex-col items-center text-center mt-10">
          <Image
            alt="hero"
            src="/Heroimage.svg"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <h2 className="text-2xl sm:text-4xl text-white font-bold py-4">
            Welcome to Brainiac
          </h2>
          <p className="text-white text-sm">
            Sharpen your mind with fun <br /> challenging quizzes
          </p>
        </div>

        <div className="text-white text-lg font-bold text-center mt-6">
          Already have an account?{" "}
          <Link href="/loginButton">
            <span className="text-yellow-500 underline cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyAccContent />
        </Suspense>
      </div>
    </div>
  );
}
