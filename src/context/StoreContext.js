import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext=createContext(null);

export default function StoreContextProvider(props){
    const [cartItems , setCartItems]=useState({});

    function addToCart(itemId){

        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev , [itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        }
    }
    function removeFromCart(itemId){
            setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    }

    function getTotalCartAmount(){
        let totalAmount = 0 ;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                 let itemInfo = food_list.find((product)=>product._id === item);
                 totalAmount += itemInfo.price * cartItems[item];   
            }
        }
        return totalAmount ;
    }
    
    

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };
    return <storeContext.Provider value={contextValue}>
        {props.children}
    </storeContext.Provider>  
} 
