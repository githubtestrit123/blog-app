import React, { useState } from 'react'
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { closeLogInModal, openLogInModal, } from '@/redux/slices/modalSlice';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';


export default function LogInModal() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isOpen = useSelector((state) =>
        state.modals.logInModalOpen

    );

    const dispatch = useDispatch();

    async function handleLogin() {
        await signInWithEmailAndPassword(auth, email, password)

    }



    return (
        <>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-yellow-700 transition"
                onClick={
                    () => dispatch(openLogInModal())
                }>
                Log In
            </button>


            <Modal
                open={isOpen}
                onClose={
                    () => dispatch(closeLogInModal())
                }
                className='flex justify-center items-center'>
                <div className="w-full h-full sm:w-[500px] sm:h-fit bg-[#1e1e1e]/95 backdrop-blur-md text-white border border-white sm:rounded-2xl shadow-lg">
                    <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer text-gray-300 hover:text-white'
                        onClick={() => dispatch(closeLogInModal())} />
                    <div className="pt-8 pb-14 px-6 sm:px-12">
                        <h1 className='text-3xl font-bold mb-10 text-center text-yellow-500'> Log in to Busy Bee</h1>
                        <div className='w-full space-y-5 mb-10'>

                            <input className="w-full h-[50px] bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-700 rounded-lg pl-4 outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Email" type="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email} />

                            <div className="w-full h-[50px] bg-[#2a2a2a] border border-gray-700 rounded-lg flex items-center pr-3 focus-within:ring-2 focus-within:ring-yellow-500">
                                            <input
                                              placeholder="Password"
                                              type={showPassword ? "text" : "password"}
                                              className="w-full h-full bg-transparent text-white placeholder-gray-400 pl-4 outline-none"
                                              onChange={(event) => setPassword(event.target.value)}
                                              value={password}
                                            />
                                            <div
                                              onClick={() => setShowPassword(!showPassword)}
                                              className="w-6 h-6 text-gray-400 cursor-pointer hover:text-yellow-400"
                                            >
                                              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                            </div>
                                          </div>
                        </div>
                        <button className="bg-yellow-400 text-black font-semibold h-[48px] rounded-full shadow-md mb-5 w-full hover:bg-yellow-700 transition"
                        onClick={() => handleLogin()}>
                            Log In
                        </button>
                        <span className="text-center text-gray-400 mb-5">OR</span>
                        <button className="bg-yellow-400 text-black font-semibold h-[48px] rounded-full shadow-md mb-5 w-full hover:bg-yellow-700 transition">
                            Login as Guest
                        </button>



                    </div>

                </div>
            </Modal>
        </>
    )
}

