import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login=()=> {
const[rememberLogin,setRememberLogin]=useState(true)
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const {user,logIn}=UserAuth();
const navigate=useNavigate();

const handleFormSubmit=async(e)=>{
  e.preventDefault();
  try{
    await logIn(email,password);
    navigate('/')
 }catch(err){
  console.log(err);
 }
  
}
  return (
    
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

      <div className='fixed w-full px-4 py-24 z-20'>
      <div className='max-w-xl h-full mx-auto bg-black/80 rounded-lg p-8'>

          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-nsans-bold'>Login</h1>
           
            <form 
            className='w-full flex flex-col py-4'
            onSubmit={handleFormSubmit}
            >
            <input
                type='email'
                placeholder='email'
                autoCorrect='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               className='p-3 my-2 bg-gray-700 rounded'
              />
              <input
                type='password'
                placeholder='password'
                autoComplete='current-password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
              />

             <button
              className='bg-red-600 py-3 my-6 rounded font-nsans-bold' >
              login
              </button>

         <div className='flex justify-between items-center text-gray-600'>
            <p> 
            <input type="checkbox"
             className='mr-2' 
             checked={rememberLogin}
             onChange={(e)=>setRememberLogin(!rememberLogin)}
             />
            Remember me
            </p>
            <p>Need Help?</p>
         </div>
         
         <p className='my-4'>
          <span  className='text-gray-600 mr-2'>
           New to Netflix?
          </span>
          <Link to='/signup'>Sign Up</Link>
           </p>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login