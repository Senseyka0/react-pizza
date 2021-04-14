import {
   ADD_PIZZA_TO_CART,
   SET_TOTAL_PRICE,
   SET_TOTAL_COUNT,
   PLUS_PIZZA_TO_CART,
   CLEAR_CART_ITEMS,
   REMOVE_CART_ITEM,
   MINUS_PIZZA_TO_CART,
} from "../constants/cart";

export const addPizzaToCart = (pizzaObj) => {
   return { type: ADD_PIZZA_TO_CART, payload: pizzaObj };
};

export const setTotalPrice = (price) => {
   return { type: SET_TOTAL_PRICE, payload: price };
};
export const setTotalCount = (count) => {
   return { type: SET_TOTAL_COUNT, payload: count };
};

export const plusPizzaToCart = (id) => {
   return { type: PLUS_PIZZA_TO_CART, payload: id };
};
export const minusPizzaItem = (id) => {
   return { type: MINUS_PIZZA_TO_CART, payload: id };
};

export const removeCartItem = (id) => {
   return { type: REMOVE_CART_ITEM, payload: id };
};
export const clearCartItems = () => {
   return { type: CLEAR_CART_ITEMS };
};
