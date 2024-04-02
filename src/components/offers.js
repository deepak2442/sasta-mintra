import React from 'react'
import exclusive_image from '../components/Assets//exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex items-center justify-center w-[65%] h-[60vh] px-32  m-auto bg-gradient-to-b from-purple-200 to-white' >
        <div className='flex-1 flex  flex-col justify-center' >
           <h1 className='font-medium text-8xl'>Exclusive</h1> 
           <p className='font-semibold text-2xl'>Offers For You</p>
           <p className='font-semibold text-2xl'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-72 h-20 rounded-full  bg-red-600 border-none text-white text-2xl font-medium mt-8 cursor-pointer'>Check now</button>
        </div>
        <div className='flex flex-1  items-center justify-end  pt-12'>
            <img src={exclusive_image} alt="imgae" />
        </div>
    </div>
  )
}

export default Offers