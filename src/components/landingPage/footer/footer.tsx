import Image from 'next/image'
import React from 'react'


export default function Footer() {
  return (
    <div className='bg-purple-700 w-full text-center justify-items-center content-center h-[243px]'>
        <Image alt="logo" src={"/whitebrainiac.svg"} width={468.15} height={108}/>
    </div>
  )
}

