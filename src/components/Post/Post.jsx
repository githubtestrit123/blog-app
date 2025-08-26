import { 
  ArrowUpTrayIcon, 
  ChartBarIcon, 
  ChatBubbleOvalLeftEllipsisIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';
import React from 'react'
import Image from 'next/image'

export default function Post() {
  return (
    <div className='bg-black text-white border-b border-gray-800'>
       <PostHeader />

       {/* Post Actions */}
       <div className='ml-16 p-3 flex space-x-14'>
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>

        <div className="relative">
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>

        <div className="relative">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>

        <div className="relative">
          <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>
       </div>
    </div>
  )
}

export function PostHeader() {
  return (
    <div className='flex p-3 space-x-5 bg-black text-white'>
      {/* Profile Image */}
      <Image 
        src="/assets/profile-pic.png" 
        width={44} 
        height={44} 
        alt="Profile" 
        className="rounded-full"
      />

      {/* User Info */}
      <div className="text-[15px] flex flex-col space-y-1.5">
        <div className="flex space-x-1.5">
          <span className="font-bold truncate max-w-[160px]">Guest</span> 
          <span className="truncate max-w-[140px]">@guest000</span>
          <span>·</span>
          <span>a day ago</span>
        </div>
      </div>
    </div>
  );
}
