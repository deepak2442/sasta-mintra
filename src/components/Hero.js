import React from 'react'
import hand_icons from "../components/Assets/hand_icon.png"
import arrow  from "../components/Assets/arrow.png"
import hero_img from "../components/Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-pink-200 to-white flex'>
        <div className='flex-1 flex flex-col justify-center gap-5 p-44 leading-3'>
             <div>
                <h2 className='text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
            </div>
             <div className='flex items-center'>
                <p className='text-8xl font-bold'>new</p>
                <img className='w-24' src={hand_icons} alt="" />
            </div>
            <p className='text-8xl font-bold'>Collections</p>
            <p className='text-8xl font-bold w-[600px]'>for everyone</p>
          <div className='flex content-center items-center gap-5 w-[310px] h-[70px] p-5 m-10 rounded-full mt-7 bg-red-600 text-gray-100 text-2xl font-medium'>
            <h1  >Latest Collection</h1>
            <img   src={arrow} alt="arrow" />
         </div>
      </div>
        <div>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero