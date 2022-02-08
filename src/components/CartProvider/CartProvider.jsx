


import React, { createContext, useState } from 'react';

//This line below create de context that we are going to use in other components.
export const cartContext = createContext();



const CartProvider = ({ children }) => {

    //^^^^^^ We need to put "children" as a prop for letting the children use them the code below.

    const [cart, setCart] = useState([]);

    const addItem = (product, quantity, title, image, price) => {

        if (isInCart(product)) {
console.log(image);
            //This array method is searching for similarities
            const indexItem = cart.findIndex(ele => ele.id === product);

            //This code below make a sum if the product is already in the cart.
            cart[indexItem].quantity = cart[indexItem].quantity + quantity;

            //This line "push" the product to the array without duplicate.
            setCart([...cart]);
        } else {
            setCart([...cart, { id: product, quantity, title, image, price }])
        }
    };

    //We need this function to do not duplicate elements in the cart.
    function isInCart(id) {
        return cart.some(element => element.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id)
        setCart(updatedCart);
    }

    const removeCart = () => {
        setCart([]);
    }


    const sumItems = cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);


    return (
        <>
            <cartContext.Provider value={{ cart, setCart, addItem, removeItem, isInCart, removeCart, sumItems }}>
                {children}
            </cartContext.Provider>
        </>
    );
};

export default CartProvider;
