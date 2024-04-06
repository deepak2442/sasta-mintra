import React from 'react'
import star_icon from '../components/Assets/star_icon.png'
import star_dullIcon from '../components/Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const{product} = props
  return (
    <div className='flex mx-20 my-[50px]'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img  className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img  className='h-[163px]' src={product.image} alt="" />
                <img  className='h-[163px]' src={product.image} alt="" />
            </div>
            <div>
                <img className='w-[600px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='mx-[70px] my-[0] flex flex-col'> 
        <h1 className='text-[#3d3d3d] text-4xl font-bold'>{product.name}</h1>
        <div className='flex items-center mt-3 gap-1 text-[#1c1c1c] text-base '>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dullIcon} alt="" />
            <p>(122)</p>
        </div>
        <div className='flex mx-0 my-5 gap-7 text-2xl font-semibold'>
            <div className='text-[#818181] line-through'>${product.old_price}</div>
            <div className='text-[#ff4141] '>${product.new_price}</div>
            
        </div>
        <div>
        <p>A lightweight, usually pullover shirt, close-lifting and round neckline and short sleeves warm as an undershirt or outer garmnet</p>
        </div>
        <div >
            <p className='mt-[55px] text-[#656565] text-xl font-semibold mb-3'>Select Size</p>
            <div className='flex mx-30px gap-5 rounded-1 '>
                <div className='px-18px py-24px bg-[#fbfbfb] rounded-sm cursor-pointer border-1 border-[#ebebeb]'>S</div>
                <div className='px-18px py-24px bg-[#fbfbfb] rounded-sm cursor-pointer border-1 border-[#ebebeb]'>M</div>
                <div className='px-18px py-24px bg-[#fbfbfb] rounded-sm cursor-pointer border-1 border-[#ebebeb]'>L</div>
                <div className='px-18px py-24px bg-[#fbfbfb] rounded-sm cursor-pointer border-1 border-[#ebebeb]'>XL</div>
                <div className='px-18px py-24px bg-[#fbfbfb] rounded-sm cursor-pointer border-1 border-[#ebebeb]'>XXL</div>
            </div>
        </div>
        <button className='px-10 py-5 w-[200px] text-base font-semibold text-white bg-[#ff4141] mb-10 mt-5 cursor-pointer'>Add To Cart</button>
        <p className='mt-3'><span className='font-semibold'>Category : </span><span> Women, T-shirt, Crop Top</span></p>
        <p><span className='font-semibold'>Tags : </span><span> Modern, Latest</span></p>
        </div>
    </div>
  )
}

export default ProductDisplay