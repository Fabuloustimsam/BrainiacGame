import Image from 'next/image'
import React from 'react'


export default function SemiFooter() {
  return (
    <div className="w-full h-[552px] bg-orange-500 relative flex flex-col items-center justify-center text-center">
  <Image
    alt="friends"
    src="/Vectorcurl.svg"
    width={1473} 
    height={148} 
    className="w-full absolute top-0 left-0"
  />
  <div className="flex flex-col items-center justify-center">
    <div className="py-3 text-purple-600 text-4xl font-bold font-sans">
      Learning is Fun and Interactive <br /> with Brainiac
    </div>
    <button className="bg-purple-800 rounded-xl text-white text-sm font-black font-sans px-12 py-5 mt-4">
      Get started
    </button>
  </div>
</div>
  )
}

