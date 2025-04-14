import Image from 'next/image'
import React from 'react'


export default function GrannySec() {
  return (
    <>
      <div className='flex justify-between px-20'>
      <Image alt="friends" src={"/Granny.svg"} width={504} height={504}/>
            <div className='flex flex-col gap-7 justify-center w-[484px]'>
                <div className='font-semibold font-serif text-purple-700 text-3xl '>Earn points, Climb the leaderboard</div>
                <div className='text-xl font-serif'>Brainiac makes learning fun by giving you points and badges as you answer more quiz correctly.</div>
            </div>
        </div>
        </>
  )
    
}

