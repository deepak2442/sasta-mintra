import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import Item from '../components/Item';
import dropdown_icon from '../components/Assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
      <img className='block mx-auto my-7 w-[82%]' src={props.banner} alt="" />
      <div className='flex my-0 mx-44 justify-between items-center'>
        <p>
          <span className='font-bold'>Shwoing 1-12</span>out of 36 products
        </p>
        <div className=' flex px-5 py-3 cursor-pointer rounded-lg border-[1px] border-[#888] '>
          sort by <img className='m-2 h-2 items-center justify-center' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='grid mx-[20px] my-[120px] grid-cols-4 gap-y-[25px] cursor-pointer'>
        {all_product.map ((item,i)=>{
          if (props.category===item.category) { return <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center mb-12 cursor-pointer'>
        <p className='flex justify-center items-center  w-60 h-16 rounded-2xl bg-[#ededed] text-[#787878] text-xl font-medium hover:text-black'>Expolre more</p>
      </div>
    </div>
  )
}

export default ShopCategory;