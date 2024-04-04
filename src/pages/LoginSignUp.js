import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='flex items-center justify-center w-[100%] h-[110vh] bg-[#fce3fe] '>
      <div className='w-[580px] h-[600px] bg-white m-auto px-10 py-14'>    
        <h1 className='mx-5 my-0'>Sign UP</h1>
        <div className='flex flex-col gap-7 mt-7'>
          <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9]' type="text" placeholder='Your Name' />
          <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9]' type="email" placeholder='Email Adress'/>
          <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9]' type="password" placeholder='Password'/>
        </div>
        <button className='w-[100%] h-[72px] text-white bg-[#ff4141] mt-7 text-2xl font-medium cursor-pointer'>Continue</button>
        <div className='flex gap-1'>
        <p className='mt-5 text-[#5c5c5c] font-medium '>Alredy have an Account?</p><span className='text-[#ff4141] font-semibold mt-5  cursor-pointer'>Click here</span>
        </div>
        <div className='flex items-center mt-2 gap-4 text-[#5c5c5c] text-lg font-normal'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>      
      </div>
    </div>
  )
}

export default LoginSignUp;