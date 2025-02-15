import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { prodcutReducer } from "./productReducer";

const Cart = createContext();

const Context = ({ children }) => {
  faker.seed(99);
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.urlPicsumPhotos(),
    isStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [prodcutdState, prodcutDispatch] = useReducer(prodcutReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, prodcutdState, prodcutDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
