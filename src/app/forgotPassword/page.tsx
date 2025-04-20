"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function ForgotPassword() {
  const [email] = useState("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (value && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const input = e.target as HTMLInputElement;
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedData = e.clipboardData.getData("Text").slice(0, 5);
    [...pastedData].forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index]!.value = char;
      }
    });
  };

  return (
    <>
      <div className="self-center flex flex-col items-center justify-center py-14">
        <Image
          alt="Brainiac Logo"
          src="/BrainiacLogo.svg"
          width={230}
          height={53}
        />
      </div>

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex self-center flex-col text-center border-2 px-7 border-gray-300 rounded-3xl shadow-md w-[792px] h-[610px]">
          <Image
            className="self-center pt-7"
            alt="Brainiac Logo"
            src="/lock.svg"
            width={82.56}
            height={104}
          />

          <div className="pt-3 text-4xl font-serif font-black">
            Forgot Password
          </div>
          <div className="flex flex-col gap-8 font-serif">
            <div className="text-xl font-bold py-7 pb-2.5">
              We sent a 5 digit confirmation code to{" "}
              <span className="text-yellow-700">{email}</span>. Please enter it
              below to confirm your account.
            </div>

            <div
              className="h-[110px] w-[646px] flex justify-between items-center self-center"
              onPaste={handlePaste}
            >
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="w-[110px] h-[110px] border border-yellow-600 text-center text-6xl focus:outline-none"
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  ref={(el) => {
                    inputsRef.current[i] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="py-14 content-center items-center self-center w-[349px] h-[32px] justify-center text-center">
          By creating an account you accept Brainiac`s{" "}
          <span className="text-purple-600">Terms of Services</span> and{" "}
          <span className="text-purple-700">Privacy Policy</span>
        </footer>
      </div>
    </>
  );
}
