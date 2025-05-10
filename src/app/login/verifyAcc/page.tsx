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
    <div className="w-full px-10 items-center justify-between text-center content-center flex flex-col">
      <div className="text-5xl font-serif pt-40">Verify your account</div>

      <div className="flex flex-col gap-20 font-serif">
        <div className="text-2xl font-bold">
          We sent a 5 digit confirmation code to{" "}
          <span className="Email text-yellow-700">{email}</span>. Please enter
          it below to confirm your account.
        </div>

        <div
          className="h-[110px] w-[646px] flex justify-between"
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
        <div className="flex justify-center text-center gap-2.5 self-center">
          Did not receive a code?{" "}
          <span className="font-black underline cursor-pointer">
            Send code again
          </span>
        </div>
      </div>
      <div className="w-[349px] text-center font-serif">
        By creating an account you accept Brainiac&apos;s{" "}
        <span className="text-purple-700">
          Terms of Services Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default function VerifyAccPage() {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-[952px] rounded-2xl w-full bg-purple-700">
          <div className="flex items-center gap-5 w-[294px] py-3 px-3">
            <Link href={"/"}>
              <div className="text-white">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </Link>
            <Image
              alt="logo"
              src={"/whitebrainiac.svg"}
              width={230}
              height={53}
            />
          </div>

          <div className="justify-items-center items-center flex flex-col font-serif text-center">
            <Image alt="logo" src={"/Heroimage.svg"} width={566} height={566} />
            <div className="text-4xl text-white font-bold py-2.5">
              Welcome to Brainiac
            </div>
            <div className="text-sm text-white">
              Sharpen your mind with fun <br /> challenging quizzes
            </div>
          </div>

          <footer className="pt-14">
            <div className="items-center font-serif text-2xl flex gap-2.5 justify-center">
              <div className="text-white font-bold">
                Already have an account?
              </div>
              <Link href="/loginButton">
                <div className="text-yellow-600 font-bold cursor-pointer">
                  Login
                </div>
              </Link>
            </div>
          </footer>
        </div>

        {/* This part now wrapped in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyAccContent />
        </Suspense>
      </div>
    </>
  );
}
