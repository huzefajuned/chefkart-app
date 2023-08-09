import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(dish) {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, dish];
      return newCartItems;
    });
  }

  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
