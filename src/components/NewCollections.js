import React from 'react'
import new_collections from './Assets/new_collections'
import Item from './Item'

const NewCollections = () => {
  return (
     <div className='flex flex-col items-center gap-10 my-14'>
        <h1 className='text-5xl font-medium'>NEW COLLECTIONS</h1>
        <hr className='w-52 h-2 rounded-xl bg-slate-400'/>
        <div  className='grid grid-cols-4 gap-6 cursor-pointer'>
            {new_collections.map((item,i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

    </div>
  )
}

export default NewCollections;