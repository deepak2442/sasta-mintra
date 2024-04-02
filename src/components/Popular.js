import React from 'react'
import data_product from '../components/Assets/data'
import Item from './Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-5xl font-medium'>POPULAR IN WOMEN</h1>
        <hr className='w-52 h-2 rounded-xl bg-slate-400'/>
        <div  className='mt-5 flex gap-7 cursor-pointer'>
            {data_product.map((item,i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular