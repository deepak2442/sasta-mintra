import React from 'react'
import footer_logo from '../components/Assets/logo_big.png'
import instagram_icon from '../components/Assets/instagram_icon.png'
import pintrest_icon from '../components/Assets/pintester_icon.png'
import whatsapp_icon from '../components/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='m-auto flex flex-col gap-12 items-center justify-center '>
        <div className='flex items-center gap-5 '>
            <img  src={footer_logo} alt="" />
            <p className=' text-4xl font-bold'>SHOPPER </p>
        </div>
        <ul className='footer-links flex gap-12 text-xl'>
            <li className='cursor-pointer'>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-5'>
            <div className='p-2 pb-1'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='p-2 pb-1'>
                <img src={pintrest_icon} alt="" />
            </div>
            <div className='p-2 pb-1'>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-center gap-8 w-[100%] mb-8 text-lg'>
        <hr className='w-[80%] border-none rounded-xl h-1 bg-slate-300' />
        <p>Copyright @ 2023 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer;