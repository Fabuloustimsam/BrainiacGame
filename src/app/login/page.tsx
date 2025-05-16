"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !username || !password || !confirmPassword) {
      alert("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      setTimeout(() => {
        router.push(`/verifyAcc?email=${encodeURIComponent(email)}`);
      }, 100);
    } catch (error) {
      console.error("Navigation error:", error);
      alert("Error navigating to verification page. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 bg-purple-700 px-4 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/">
            <div className="text-white cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </Link>
          <Image alt="logo" src="/whitebrainiac.svg" width={180} height={42} />
        </div>

        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="max-w-md w-full">
            <Image
              alt="landing image"
              src="/landingImg.svg"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="text-2xl md:text-4xl text-white font-bold py-4 font-serif">
            Welcome to Brainiac
          </div>
          <div className="text-sm md:text-base text-white">
            Sharpen your mind with fun <br className="md:hidden" /> challenging
            quizzes
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="items-center font-serif text-lg md:text-xl flex gap-2 justify-center">
            <div className="text-white font-bold">Already have an account?</div>
            <Link href="/login/loginButton">
              <div className="text-yellow-600 font-bold cursor-pointer">
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white px-4 md:px-8 py-8 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <div className="text-center">
            <div className="font-black py-4 font-serif text-2xl md:text-4xl">
              Create your account!
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-serif">Username</div>
            <input
              className="rounded-xl bg-gray-200 w-full h-12 md:h-14 px-4"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-serif">Email</div>
            <input
              className="rounded-xl bg-gray-200 w-full h-12 md:h-14 px-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-serif">Password</div>
            <input
              className="rounded-xl bg-gray-200 w-full h-12 md:h-14 px-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-serif">Confirm Password</div>
            <input
              className="rounded-xl bg-gray-200 w-full h-12 md:h-14 px-4"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-700 rounded-xl text-white w-full h-12 md:h-14 my-4 font-bold font-serif text-xl cursor-pointer disabled:bg-purple-400"
          >
            {isSubmitting ? "Creating Account..." : "Create an Account"}
          </button>

          <div className="flex items-center justify-center my-2">
            <div className="flex-1">
              <hr className="border border-slate-400" />
            </div>
            <h2 className="font-sans px-2">or</h2>
            <div className="flex-1">
              <hr className="border border-slate-400" />
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl flex items-center gap-2 justify-center w-full h-12 md:h-14 my-4 font-bold font-serif text-base border border-gray-300 border-b-4 shadow-md bg-white cursor-pointer"
          >
            <Image
              alt="Google Icon"
              src="/googleicon.svg"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Sign up with Google
          </button>

          <div className="text-center">
            <div className="text-sm">
              By creating an account you accept Brainiac{" "}
              <span className="text-purple-700">Terms of Services</span> and{" "}
              <span className="text-purple-700">Privacy Policy</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
