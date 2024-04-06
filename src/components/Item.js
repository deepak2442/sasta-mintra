import React from 'react';
import {Link} from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='w-80  hover:scale-105'>
    <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link> 
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