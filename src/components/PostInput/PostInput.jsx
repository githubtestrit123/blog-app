import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function PostInput() {
  return (
    <div className='flex space-x-5 p-3'>
        <Image src={'/assets/bee_logo.png'} alt="logo" width={44} height={44}/>
        <div className='w-full'>
            <textarea className='resize-none outline-none w-full min-h-[50px] text-lg border border-white' 
            placeholder="What's happening!?"
            />
            <div className="flex justify-between">
                <div className="flex">
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />

                </div>
            </div>

        </div>
    </div>
  )
}

