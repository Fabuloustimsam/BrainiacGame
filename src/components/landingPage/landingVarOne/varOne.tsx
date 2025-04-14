import Image from 'next/image'
import React from 'react'


export default function Varone() {
  return(
    <>
    <div className='flex justify-between px-20'>
        <div className='flex flex-col gap-7 justify-center w-[484px]'>
            <div className='font-semibold font-serif text-purple-700 text-3xl '>May the smartest in the circle win!</div>
            <div className='text-xl font-serif'>Challenge your friends to participate in a quiz and may the smartest earn the winner badge.</div>
        </div>
        <Image alt="friends" src={"/Frame 14.svg"} width={567.24} height={567.24}/>
    </div>
    </>
  )
}


