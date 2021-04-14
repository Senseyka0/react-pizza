import { SET_SORT_BY, SET_CATEGORY } from "../constants/filters";

export const setSortBy = (sortBy) => {
   return { type: SET_SORT_BY, payload: sortBy };
};
export const setCategory = (selectedCategory) => {
   return { type: SET_CATEGORY, payload: selectedCategory };
};
