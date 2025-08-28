"use client"
import React, { useEffect, useState } from 'react'
import PostInput from '../PostInput/PostInput'
import Post from '../Post/Post'
import { onSnapshot, orderBy, query , collection } from 'firebase/firestore'
import { db  } from '@/firebase'
import { useDispatch } from 'react-redux'
import { closeLoadingScreen } from '@/redux/slices/loadingSlice'

export default function PostFeed() {
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    const q= query(collection(db, "posts"), orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs
      setPosts(snapshotDocs)
      dispatch(closeLoadingScreen())

    })
    return unsubscribe
  }, [])
  return (
    <div className='flex-grow border-x border-white bg-black max-w-2xl text-white'>
        <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm font-bold text-white">
            Home
        </div>
        <PostInput />
      <div className="w-full max-w-2xl mx-auto bg-black text-white p-4">
      
      <h2 className="text-xl font-bold mb-4 pb-2 text-[#F4AF01]">
        Our Latest Posts
      </h2>
        {posts.map((doc) => (
          <Post key={doc.id} data={doc.data()}  id = {doc.id}/>
        ))}
        </div>


         
    </div>
  )
}

