"use client";
import { db } from '@/firebase';
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp, Timestamp } from 'firebase/firestore';
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function PostInput() {
  const [ text, setText] = useState('');
  const user = useSelector((state)=> state.user)

  async function sendPost(){
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: []
      
    });
    setText('');
  }
  return (
    <div className='flex space-x-5 p-3 border-b border-gray-800'>
        <Image src={'/assets/bee_logo.png'} alt="logo" width={44} height={44} className= "w-11 h-11" />
        <div className='w-full'>
            <textarea className='resize-none outline-none w-full min-h-[50px] text-lg border border-white' 
            placeholder="What's happening!?"
            onChange={(event)=> setText(event.target.value)}
            value={text}
            />
            <div className="flex justify-between pt-5 border-t border-gray-800">
                <div className="flex space-x-1.5">
                    <PhotoIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <ChartBarIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <FaceSmileIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <CalendarIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />
                    <MapPinIcon  className="w-[22px] h-[22px] text-[#F4AF01]" />

                </div>
                <button className='bg-[#F4AF01] text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer disabled: bg-opacity-60 hover:bg-yellow-800'
                disabled={!text}
                onClick={() => sendPost()}>
                   Bumble
                </button>

            </div>
             
            

        </div>
    </div>
  )
}

