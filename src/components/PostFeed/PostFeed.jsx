import React from 'react'
import PostInput from '../PostInput/PostInput'
import Post from '../Post/Post'

export default function PostFeed() {
  return (
    <div className='flex-grow border-x border-white bg-black max-w-2xl text-white'>
        <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm font-bold text-white">
            Home
        </div>
        <PostInput />

         <Post />
    </div>
  )
}

