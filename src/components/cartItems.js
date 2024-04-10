import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import remove_icon from '../components/Assets/cart_cross_icon.png'

const CartItems = () => {

    const {getTotalCartAmount,all_product,cartItems,removeItems} = useContext(ShopContext);

  return (
    <div className='mx-[100px] my-[170px]'>
             <div className='grid grid-cols-6 items-center place-items-center gap-20 px-5 text-[#454545] text-lg font-semibold'>
            <p>products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div>
            <hr className='h-1 bg-[#e2e2e2 border-none]' />
           {all_product.map((e) =>{
            if(cartItems[e.id] > 0)
            {
                return <div>
                    <div className='grid grid-cols-6 items-center place-items-center gap-20 px-5 text-[#454545] text-base font-medium my-3'>
                        <img src={e.image}  className='h-[100px] ' alt="" />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='border-2 w-12 h-10'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img className='w-4 mx-[28px] ' src={remove_icon} onClick={() =>{removeItems(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
            }
            return null;
           })}
           <div className='flex my-[100px] my-0'>
            <div className='flex-1 flex  flex-col mr-[200px] gap-10'>
            <h1>cart TOtal</h1>
            <div>
                <div className='flex justify-between py-[15px] px-0'>
                    <p>subTototal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div  className='flex justify-between py-[15px] px-0' >
                    <p>shipping fee</p>
                    <p>${0}</p>
                </div>
                <hr />
                <div  className='flex justify-between py-[15px] px-0'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='w-[262px] h-[58px] bg-[#ff5a5a] text-[#fff] text-base cursor-pointer'>PROCEED TO CHECKOUT</button>
           </div>
           <div className='flex-1 text-base font-medium'>
            <p className='text-[#555]'>If u have a promo code, Enter it here</p>
            <div className='w-[504px] mt-4 pl-5 h-14 bg-[#eaeaea] flex content-between'>
                <input className='bg-transparent text-base w-[330px]' type="text" placeholder='promo
                 code' />
                <button className='w-[170px] h-[58px] text-base bg-black text-white cursor-pointer'>Submit</button>
            </div>
           </div>
         </div>
    </div>

  )
}

export default CartItems