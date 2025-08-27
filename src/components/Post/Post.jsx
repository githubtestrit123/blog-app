import { 
  ArrowUpTrayIcon, 
  ChartBarIcon, 
  ChatBubbleOvalLeftEllipsisIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';
import React from 'react'
import Image from 'next/image'
import moment from "moment";


export default function Post({ data }) {
  if (!data) return null; 
  return (
    <div className='bg-black text-white border-b border-gray-800'>
       <PostHeader 
       username={data.username}
       name={data.name}
       timestamp={data.timestamp}
       text={data.text}
       
       />

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

export function PostHeader({username, name, timestamp, text}) {
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

      
      <div className="text-[15px] flex flex-col space-y-1.5 bg-black text-white rounded-lg">
        <div className="flex space-x-1.5">
          <span className="font-bold  max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px] text-white inline-block whitespace-nowrap overflow-hidden 
          text-ellipsis "> {name}</span> 
          <span className="max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px] text-white inline-block whitespace-nowrap overflow-hidden 
          text-ellipsis ">@{username}</span>
          <span>·</span>
          {timestamp &&
          <span>
            {moment(timestamp.toDate()).fromNow()}
          </span>}
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>

      
    </div>
  );
}
