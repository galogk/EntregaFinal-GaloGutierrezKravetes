import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

    const [cart] = useState([
        {id:"0", quantity: 0, price: 0},
        {id:"1", quantity: 0, price: 0},
        {id:"2", quantity: 0, price: 0},
        {id:"3", quantity: 0, price: 0},
        {id:"4", quantity: 0, price: 0},
        {id:"5", quantity: 0, price: 0},
        {id:"6", quantity: 0, price: 0},
        {id:"7", quantity: 0, price: 0},])
    return (
    <CartContext.Provider value = {[cart]}>
        {children}
    </CartContext.Provider>
    )
}