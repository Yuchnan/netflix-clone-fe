import React, { useState } from 'react'

import { JUMBOTRON_IMAGE } from '@/constants/listAsset'
import { GoChevronLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { emailAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useAtom(emailAtom)

    const handleRegister = (e) => {
        e.preventDefault

    }

    return (
        <>
            <img
                src={JUMBOTRON_IMAGE}
                className='image-full h-[100vh] object-cover opacity-70'
            />
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-black/80 px-8 py-16 rounded-xl max-w-xl w-full'>
                <form className='flex flex-col gap-4'>
                    <div className='text-white text-xl font-semibold mb-2 flex items-center gap-2'>
                        <GoChevronLeft
                            size={28}
                            className='text-slate-200 hover:text-white cursor-pointer'
                            onClick={() => navigate("/")}
                        />
                        <h3>Sign Up</h3>
                    </div>
                    <div className='relative'>
                        <input
                            placeholder="Email"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent'
                        />
                        <label
                            className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[4px] transition-all text-lg -z-10'
                        >Email</label>
                    </div>
                    <div className='relative'>
                        <input
                            placeholder="Password"
                            type='password'
                            className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent'
                        />
                        <label
                            className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[4px] transition-all text-lg -z-10'
                        >Password</label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <button
                            onClick={handleRegister}
                            className='bg-red-500 py-3 w-full text-white font-bold rounded-md'
                        >
                            Sign Up
                        </button>
                        <p>Already have an account?
                            <span
                                onClick={() => navigate("/login")}
                                className='text-blue-500 underline cursor-pointer ml-2'
                            >
                                Sign in here
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register