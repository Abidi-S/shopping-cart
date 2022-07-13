import React, { createContext } from "react";
import {
  rand,
  randBoolean,
  randImg,
  randNumber,
  randProductName,
  randUuid,
  seed,
} from "@ngneat/falso";

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
  console.log(products);
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default Context;
