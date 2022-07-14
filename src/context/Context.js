import React, { createContext, useContext, useReducer } from "react";
import {
  rand,
  randBoolean,
  randImg,
  randNumber,
  randProductName,
  randUuid,
  seed,
} from "@ngneat/falso";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

seed(214831);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: randUuid(),
    name: randProductName(),
    price: randNumber({ length: 3 }),
    image: randImg(),
    inStock: rand([0, 3, 5, 6, 7]),
    fastDelivery: randBoolean(),
    ratings: rand([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
