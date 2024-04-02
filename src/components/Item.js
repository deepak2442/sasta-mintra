import React from 'react'

const Item = (props) => {
  return (
    <div className='w-80  hover:scale-105'>
    <img src={props.image} alt="" />
    <p className='m-1'>{props.name}</p>
    <div className='flex gap-5'>
        <div className='text-lg font-semibold' >
            ${props.new_price}
        </div>
        <div className='text-lg font-medium line-through text-gray-600'>
            ${props.old_price}
        </div>
    </div>

    </div>

  )
}

export default Item