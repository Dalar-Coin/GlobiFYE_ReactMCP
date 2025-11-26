import React, { useState } from 'react'
import anthropic from '../assets/login/Anthropic.png'
import gemini from '../assets/login/gemini.92263585.png'
import reddit from '../assets/login/Reddit.c0475776.png'
import pepsi from '../assets/login/Pepsi Logo.png'
import turing from '../assets/login/Turing.jpg'
import { useNavigate } from 'react-router-dom'
import axios, { isCancel, AxiosError } from 'axios'

const SignUp = () => {
  let navigate = useNavigate()

  // let [email, setEmail] = useState('')
  // let [password, setPassword] = useState('')

  // const handleInput = (e) => {
  //   setEmail({...email, [e.target.email]})
  //   setPassword({...password, [e.target.password]})
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     axios
  //       .post('/api/users', {
  //         firstName: 'Fred',
  //         lastName: 'Flintstone',
  //       })
  //       .then(function (response) {
  //         console.log(response)
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="container mx-auto flex justify-center mt-5 mr-15">
      <div className="rounded-lg p-5 w-3/7 p-10 px-20 mt-5">
        <div className="text-[30px] mb-5">GlobiFYE</div>
        <div className="text-[24px]">Create An Account</div>
        <div className="flex gap-1">
          <div className="opacity-50">Already have an account?</div>
          <button
            className="font-bold underline hover:text-blue-300 hover:no-underline duration-250 mb-10"
            onClick={() => navigate('/Login')}
          >
            Log in here
          </button>
        </div>
        <form className="flex flex-col">
          <label className="flex flex-col gap-2">
            Email
            <input
              className="rounded-lg p-3 bg-gray-200 mb-5"
              // onChange={handleSubmit}
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2">
            Password
            <input
              className="rounded-lg p-3 bg-gray-200 mb-5"
              // onChange={handleSubmit}
              type="text"
            />
          </label>
          <div className="mb-5">
            By signing up, you agree to Turing's Terms of Service and Privacy
            Policy.
          </div>
          <label className="flex flex-col">
            <button
              type="submit"
              className="text-white bg-blue-500 rounded-lg p-3 mb-5 hover:opacity-80 duration-250"
            >
              Sign Up
            </button>
          </label>
          <span className="flex items-center mb-5">
            <span className="h-px flex-1 bg-gray-300"></span>
            <span className="shrink-0 px-4 text-gray-900">or</span>
            <span className="h-px flex-1 bg-gray-300"></span>
          </span>
          <button className="border border-gray-500 rounded-sm p-3 hover:bg-blue-100 duration-250">
            Continue with Google
          </button>
        </form>
      </div>
      <div className="rounded-lg p-5 w-4/7 flex flex-col gap-2 px-10">
        <div className="rounded-[20px] bg-blue-100 p-5 items-center">
          <div className="text-center">
            Find remote jobs with hundreds of GlobiFYE customers
          </div>
          <div className="grid grid-cols-3 gap-10 p-10 justify-items-center items-center">
            <img
              src={anthropic}
              className="h-10 object-contain"
              alt="anthropic"
            />
            <img src={pepsi} className="h-10 object-contain" alt="pepsi" />
            <img src={reddit} className="h-10 object-contain" alt="reddit" />
            <img src={gemini} className="h-10 object-contain" alt="gemini" />
          </div>
        </div>
        <div className="rounded-[20px] bg-blue-100">
          <div className="p-5">
            <div className="text-[20px] opacity-50">Join a network of the</div>
            <div className="text-[42px]">World's best Professionals</div>
            <div className="text-[20px] opacity-50">
              have found top remote jobs after joining Turing.
            </div>
            <div className="text-[20px] opacity-50">
              You could be the next one!
            </div>
          </div>
          <button
            className="border rounded-lg p-5 mb-5"
            onClick={() => navigate('/Welcome')}
          >
            To Welcome Screen
          </button>
          <button
            className="border rounded-lg p-5 mb-5"
            onClick={() => navigate('/Jobs')}
          >
            To Jobs Page
          </button>
          <img src={turing} className="rounded-b-[20px]" alt="turing" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
