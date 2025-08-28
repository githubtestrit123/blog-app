"use client";
import { auth } from '@/firebase';
import { signOutUser } from '@/redux/slices/userSlice';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

export default function SidebBarUserInfo() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
 
  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser())

  }
  const name = useSelector((state => state.user.name))
  return (
    name &&
    <div className="absolute bottom-3 text-white flex items-center justify-start space-x-2 xl:p-3 xl:pe-6  hover: bg-gray rounded-full transition cursor-pointer
    w-fit xl:w-[180px]"
    onClick={() => handleSignOut()}>
            <Image 
            src={"/assets/profile-pic.png"}
            width={36}
            height={36}
            alt='profile'
            className='w-9 h-9 bg-white rounded-full'
            />
            <div className='hidden xl:flex flex-col text-sm max-w-40'>
              <span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{user.name}</span>
              <span className='whitespace-nowrap text-ellipsis overflow-hidden text-white'>@{user.username}</span>
              <button className='bg-[#F4AF01] text-white rounded-full cursor-pointer hover:bg-yellow-800'>LogOut</button>
            </div>
        </div>
  )
}

