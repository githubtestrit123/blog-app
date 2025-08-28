"use client"
import Image from 'next/image'
import React from 'react'
import { LinearProgress } from '@mui/material'
import { useSelector } from 'react-redux'

export default function LoadingScreen() {
    const LoadingScreenOpen = useSelector((state) => state.loading.LoadingScreenOpen)
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-black  flex items-center 
    justify-center transition ${LoadingScreenOpen ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
        <div className='flex flex-col items-center'>
            <Image 
            src={'/assets/bee_logo.png'}
            width={120}
            height={20}
            alt='Logo'
            className='mb-5'
            />
            <h1 className='text-4xl font-bold mb-10'>Busy
                <span className='text-[#F4AF01]'>Bee</span>
            </h1>
            <LinearProgress sx={{
                width: 265,
                height: 10,
                backgroundColor: "#F4AF01", 
                "& .MuiLinearProgress-bar" : {
                    backgroundColor: "black"
                }
            }}/>
        </div>
    </div>
  )
}

