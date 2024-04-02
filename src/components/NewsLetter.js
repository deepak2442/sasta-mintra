import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[65%] h-[40vh] flex flex-col mb-[100px] px-28 m-auto items-center justify-center bg-gradient-to-b from-purple-200 to-white gap-7'>
        <h1 className='text-4xl font-semibold'>Get Exclusive Offers On Your Email</h1>
        <p className='text-xl'>Subscribe to our newsletter and stay updated.</p>
        <div  className='flex items-center justify-between bg-white w-[730px] h-16 rounded-full'>
            <input className='w-[500px] ml-8 border-none outline-none text-xl text-gray-600' type="email" placeholder='  Your Email ID' />
            <button className='w-[210px] h-[70px] rounded-full bg-black text-white text-base cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;