"use client"
import React from 'react'
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { closeCommentModal } from '@/redux/slices/modalSlice';
import { PostHeader } from '../Post/Post';
import PostInput from '../PostInput/PostInput';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CommentModal() {
    const open= useSelector(state=> state.modals.commentModalOpen);
    const commentDetails = useSelector(state=> state.modals.commentPostDetails)
    const dispatch = useDispatch()
  return (
    <>
        <Modal
        open={open}
        onClose={()=>dispatch(closeCommentModal())}
        className='flex justify-center items-center'
        >
            <div className='w-full h-full sm:w-[600px] sm:h-fit bg-[#1e1e1e]/95 backdrop-blur-md text-white border border-white sm:rounded-xl shadow-lg  outline-none relative'>
            <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer text-gray-300 hover:text-white'
                onClick={() => dispatch(closeCommentModal())} />
                <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col'>
                    <PostHeader 
                    name= {commentDetails.name}
                    username = {commentDetails.username}
                    text = {commentDetails.text} 
                    replyTo = {commentDetails.username}
                    />

                    <div className = "mt-4">
                        <PostInput
                        insideModal = {true} />

                    </div>
                    
                    

                </div>
            </div>


        </Modal>
    </>
  )
}

