"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-purple-700 flex flex-col justify-between rounded-2xl py-6 px-4 md:px-8">
        {/* Logo + Back Arrow */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <ArrowLeft className="text-white w-5 h-5" />
          </Link>
          <Image alt="logo" src="/whitebrainiac.svg" width={180} height={50} />
        </div>

        {/* Hero Image & Text */}
        <div className="flex flex-col items-center text-center mt-10">
          <Image
            alt="logo"
            src="/Heroimage.svg"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <h1 className="text-3xl sm:text-4xl text-white font-bold font-serif py-4">
            Welcome to Brainiac
          </h1>
          <p className="text-sm sm:text-base text-white">
            Sharpen your mind with fun <br /> challenging quizzes
          </p>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10 font-serif text-lg">
          <p className="text-white font-semibold">Already have an account?</p>
          <Link href="/login">
            <span className="text-yellow-500 font-bold cursor-pointer">
              Create an account
            </span>
          </Link>
        </div>
      </div>

      {/* Right Section - Form */}
      <form className="w-full md:w-1/2 bg-white flex flex-col justify-center gap-6 px-6 sm:px-10 py-10">
        <h2 className="text-3xl sm:text-4xl font-black font-serif text-center mb-8">
          Welcome Back!
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-lg sm:text-2xl font-serif">Email</label>
          <input
            className="rounded-2xl bg-gray-200 w-full max-w-[644px] h-[60px] px-4"
            type="email"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-lg sm:text-2xl font-serif">Password</label>
          <div className="relative">
            <input
              className="rounded-2xl bg-gray-200 w-full max-w-[644px] h-[60px] px-4"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div className="absolute right-4 top-4 cursor-pointer text-gray-500">
              {showPassword ? (
                <Eye size={24} onClick={togglePassword} />
              ) : (
                <EyeOff size={24} onClick={togglePassword} />
              )}
            </div>
          </div>
          <Link
            href="/forgotPassword"
            className="text-right text-gray-500 text-sm px-1"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="bg-purple-700 text-white font-black text-lg sm:text-2xl rounded-2xl h-[60px] w-full max-w-[644px] mt-4">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <hr className="flex-grow border border-slate-400" />
          <span>or</span>
          <hr className="flex-grow border border-slate-400" />
        </div>

        {/* Google Button */}
        <button className="flex items-center justify-center gap-3 border border-gray-300 shadow-md rounded-2xl h-[60px] w-full max-w-[644px]">
          <Image alt="Google" src="/googleicon.svg" width={24} height={24} />
          <span className="font-bold text-lg">Continue with Google</span>
        </button>

        {/* Footer Disclaimer */}
        <div className="text-xs text-center text-gray-600 mt-6 max-w-md mx-auto">
          By creating an account, you accept Brainiac&apos;s{" "}
          <span className="text-purple-700 underline">Terms of Services</span>{" "}
          and <span className="text-purple-700 underline">Privacy Policy</span>.
        </div>
      </form>
    </div>
  );
}
