import axios from "axios";

import { SET_PIZZAS, TOGGLE_LOADING } from "../constants/pizzas";

export const setPizzas = (pizzaItems) => {
   return { type: SET_PIZZAS, payload: pizzaItems };
};
export const toggleLoading = (isLoading) => {
   return { type: TOGGLE_LOADING, payload: isLoading };
};

export const fetchPizzas = (category, sortBy) => (dispatch) => {
   dispatch(toggleLoading(false));

   const isAllCategories = category > 0 ? `category=${category}` : "";

   axios
      .get(`http://localhost:3005/pizzas?${isAllCategories}&_sort=${sortBy}&_order=asc`)
      .then(({ data }) => {
         dispatch(setPizzas(data));
      });
};
