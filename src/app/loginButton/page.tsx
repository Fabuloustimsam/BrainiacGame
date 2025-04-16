import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-[952px] rounded-2xl w-full bg-purple-700">
          <div className="flex items-center gap-5 w-[294px] py-3 px-3">
            <Link href={"/"}>
              <div className="text-white">back</div>
            </Link>

            <Image
              alt="logo"
              src={"/whitebrainiac.svg"}
              width={230}
              height={53}
            />
          </div>

          <div className="justify-items-center items-center  flex flex-col font-serif text-center">
            <Image alt="logo" src={"/Heroimage.svg"} width={566} height={566} />
            <div className="text-4xl text-white font-bold py-2.5">
              Welcome to Brainiac
            </div>
            <div className="text-sm text-white">
              Sharpen your mind with fun <br /> challenging quizzes
            </div>
          </div>

          <footer className="pt-14">
            <div className="items-center font-serif text-2xl  flex gap-2.5 justify-center">
              <div className="text-white font-bold">
                Already have an account ?
              </div>
              <div className="text-yellow-600 font-bold cursor-pointer">
                Create an account
              </div>
            </div>
          </footer>
        </div>

        <form className="w-full flex flex-col h-full px-7 gap-3  bg-white justify-center justify-items-center">
          <div className="justify-center text-center">
            <div className="font-black pt-2 pb-16 font-serif text-4xl">
              Welcome Back!
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-2xl font-serif">Email</div>
            <input
              className="rounded-2xl bg-gray-200 w-[644px] h-[70px] px-4"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-2xl font-serif">Password</div>
            <div className="flex relative">
              <input
                className="rounded-2xl relative bg-gray-200 w-[644px] h-[70px] px-4"
                type="password"
                placeholder="Password"
              />
              <div className="absolute right-12 top-5 items-center">
                <EyeOff size={24} /> : <Eye size={24} />
              </div>
            </div>

            <div className="text-end px-4  text-gray-400">Forgot password?</div>
          </div>

          <button className="bg-purple-700 cursor-pointer rounded-2xl text-white w-[644px] h-[70px] my-7 font-black font-serif text-2xl">
            Login
          </button>

          <div className="flex items-center justify-center">
            <div className="w-[315px]">
              <hr className="border border-slate-400" />
            </div>
            <h2 className="font-sans px-2">or</h2>
            <div className="w-[315px]">
              <hr className="border border-slate-400" />
            </div>
          </div>

          <button className="rounded-2xl cursor-pointer flex items-center gap-2 justify-center w-[644px] h-[70px] my-7 font-black font-serif text-lg border border-gray-300 border-b-4 shadow-md bg-white">
            <Image alt="logo" src={"/googleicon.svg"} width={32} height={32} />
            Continue with Google
          </button>

          <footer className="flex items-center pt-48 justify-center text-center">
            <div className="w-[349px]">
              By creating an account you accept Brainiac&apos;s{" "}
              <span className="text-purple-700">Terms of Services</span> and{" "}
              <span className="text-purple-700">Privacy Policy</span>
            </div>
          </footer>
        </form>
      </div>
    </>
  );
}
