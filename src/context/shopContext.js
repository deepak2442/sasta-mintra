import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

const getdefalutcart = () => {
    let cart = {};
    for ( let i=0; i<all_product.length; i++){
        cart[i] =0
    }
    return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getdefalutcart())
    

    const addToCart = (itemId) => {
        setCartItems ((prev) =>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeItems = (itemId) => {
        setCartItems ((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
          
        }
        return totalAmount;
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeItems};

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;