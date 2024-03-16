import React, { useState } from "react";
import logo from './Assets/logo.png'
import carticon from './Assets/cart_icon.png';


const Navbar = () => {

    const [menu,setMenu] = useState("shop")

    return (
        <div className="p-3 m-3 flex justify-around shadow-md">
        <div className="flex items-center gap-3">
       <img src={logo} alt="" />
       <p className="font-semibold h-8">SHOPPER</p>
       </div>
       
       <ul className="flex items-center list-none gap-12 text-gray-700 text-base font-medium">
       
        <li className="flex flex-col items-center content-center gap-1 cursor-pointer" onClick={() => {setMenu("shop")}}>shop {menu==="shop"?<hr className="border-none w-9 h-1 rounded-sm bg-red-500"/>:<></>}</li>
        <li className="flex flex-col items-center content-center gap-1 cursor-pointer" onClick={() => {setMenu("mens")}}>men{menu==="mens"?<hr className="border-none w-9 h-1 rounded-sm bg-red-500"/>:<></>}</li>
        <li className="flex flex-col items-center content-center gap-1 cursor-pointer" onClick={() => {setMenu("women")}}>women{menu ==="women"?<hr className="border-none w-9 h-1 rounded-sm bg-red-500"/>:<></>}</li>
        <li className="flex flex-col items-center content-center gap-1 cursor-pointer" onClick={() => {setMenu("kid")}}>kid{menu ==="kid"?<hr className="border-none w-9 h-1 rounded-sm bg-red-500"/>:<></>}</li>
        
       </ul>
       
       <div className="flex items-center gap-6">
        <button className="w-36 h-14 outline-none border-solid border-2 border-gray-500 rounded-full text-xl font-thin active:bg-slate-500">Login</button>
        <img className="flex items-center gap-5" src={carticon} alt="" />
        <span className="w-5 h-5 flex justify-center items-center mt-[-35px] ml-[-30px] rounded-xl text-xs bg-red-500 text-white">0</span>
       </div>
       </div>
        
    )
}


export default Navbar;