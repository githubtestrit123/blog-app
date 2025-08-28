import { 
  ArrowUpTrayIcon, 
  ChartBarIcon, 
  ChatBubbleOvalLeftEllipsisIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';
import React from 'react'
import Image from 'next/image'
import moment from "moment";
import { openCommentModal , openLogInModal, setCommentDetails} from '@/redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import {HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';


export default function Post({ data, id }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  async function likePost(){
    if(!user.username){
      dispatch(openLogInModal())
      return;
    }
    const postRef = doc(db, "posts", id);
    if(data.likes.includes(user.uid)){
      await updateDoc(postRef, {
        likes: arrayRemove(user.uid),
      })
    }
    await updateDoc(postRef, {
      likes: arrayUnion(user.uid),
    })
    
  }
  
  if (!data) return null; 
  return (
    <div className='bg-black text-white border-b border-gray-800'>
       <PostHeader 
       username={data.username}
       name={data.name}
       timestamp={data.timestamp}
       text={data.text}
       
       />

       
       <div className='ml-16 p-3 flex space-x-14'>
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition"
          onClick={() =>{
            if(!user.username){
              dispatch(openLogInModal())
              return;

            }
            dispatch(setCommentDetails({
              name: data.name,
              username:data.username,
              id: id,
              text: data.text,
            }))
            dispatch(openCommentModal())}} />
            {
              data.comments.length>0 &&
          <span className="absolute text-xs top-1 -right-3">{data.comments.length}</span>
            }
        </div>

        <div className="relative">
          {
            data.likes.includes(user.uid) ?
            <HeartSolidIcon className="w-[22px] h-[22px] cursor-pointer text-red-500 transition"
          onClick={() => likePost()} /> :
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-red-500 transition"
          onClick={() => likePost()} />
        }
        {
          data.likes.length > 0 &&
          <span className="absolute text-xs top-1 -right-3">{data.likes.length}</span>
        }
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

export function PostHeader({ username, name, timestamp, text, replyTo }) {
  return (
    <div className='flex p-3 space-x-5'>
      
      <Image 
        src="/assets/profile-pic.png" 
        width={44} 
        height={44} 
        alt="Profile" 
        className="w-11 h-11 z-10 bg-white rounded-full"
      />

      
      <div className="text-[15px] flex flex-col space-y-1.5 rounded-lg">
        <div className="flex space-x-1.5">
          <span className="font-bold max-w-[140px] text-ellipsis overflow-hidden whitespace-nowrap text-[#F4AF01]">{name}</span> 
          <span className="text-gray-400">@{username}</span>

          {timestamp && (
            <>
              <span>·</span>
              <span>{moment(timestamp.toDate()).fromNow()}</span>
            </>
          )}
        </div>

        <div className="flex flex-col">
          
          <span>{text}</span>

          
          {replyTo && (
            <span className='text-[15px] text-[#707E89]'>
              Replying to <span className="text-[#F4AF01]">@{replyTo}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
