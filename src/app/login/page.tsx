import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-between">
      {/* Left Panel */}
      <div className="h-[952px] rounded-2xl w-full bg-purple-700">
        <div className="flex items-center gap-5 w-[294px] py-3 px-3">
          <Link href="/">
            <div className="text-white cursor-pointer">back</div>
          </Link>
          <Image alt="logo" src="/whitebrainiac.svg" width={230} height={53} />
        </div>

        <div className="flex flex-col items-center justify-center font-serif text-center">
          <Image
            alt="landing image"
            src="/landingImg.svg"
            width={566}
            height={566}
          />
          <div className="text-4xl text-white font-bold py-2.5">
            Welcome to Brainiac
          </div>
          <div className="text-sm text-white">
            Sharpen your mind with fun <br /> challenging quizzes
          </div>
        </div>

        <footer className="pt-14">
          <div className="items-center font-serif text-2xl flex gap-2.5 justify-center">
            <div className="text-white font-bold">Already have an account?</div>
            <Link href="/loginButton">
              <div className="text-yellow-600 font-bold cursor-pointer">
                Login
              </div>
            </Link>
          </div>
        </footer>
      </div>

      {/* Right Panel - Form */}
      <form className="w-full flex flex-col h-full px-7 gap-3 bg-white justify-center">
        <div className="text-center">
          <div className="font-black pt-2 pb-16 font-serif text-4xl">
            Create your account!
          </div>
        </div>

        {/* Username */}
        <div className="flex flex-col gap-2.5">
          <div className="text-2xl font-serif">Username</div>
          <input
            className="rounded-2xl bg-gray-200 w-[644px] h-[70px] px-4"
            type="text"
            placeholder="Username"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2.5">
          <div className="text-2xl font-serif">Email</div>
          <input
            className="rounded-2xl bg-gray-200 w-[644px] h-[70px] px-4"
            type="email"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2.5">
          <div className="text-2xl font-serif">Password</div>
          <input
            className="rounded-2xl bg-gray-200 w-[644px] h-[70px] px-4"
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2.5">
          <div className="text-2xl font-serif">Confirm Password</div>
          <input
            className="rounded-2xl bg-gray-200 w-[644px] h-[70px] px-4"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-purple-700 rounded-2xl text-white w-[644px] h-[70px] my-7 font-black font-serif text-2xl cursor-pointer">
          Create an Account
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center">
          <div className="w-[315px]">
            <hr className="border border-slate-400" />
          </div>
          <h2 className="font-sans px-2">or</h2>
          <div className="w-[315px]">
            <hr className="border border-slate-400" />
          </div>
        </div>

        {/* Google Signup */}
        <button className="rounded-2xl flex items-center gap-2 justify-center w-[644px] h-[70px] my-7 font-black font-serif text-lg border border-gray-300 border-b-4 shadow-md bg-white cursor-pointer">
          <Image
            alt="Google Icon"
            src="/googleicon.svg"
            width={32}
            height={32}
          />
          Sign up with Google
        </button>

        {/* Footer Text */}
        <footer className="flex items-center justify-center text-center">
          <div className="w-[349px] text-sm">
            By creating an account you accept Brainiac{" "}
            <span className="text-purple-700">Terms of Services</span> and{" "}
            <span className="text-purple-700">Privacy Policy</span>
          </div>
        </footer>
      </form>
    </div>
  );
}
