import { SET_SORT_BY, SET_CATEGORY } from "../constants/filters";

const initialState = {
   category: 0,
   sortBy: { name: "популярности", type: "popular" },
};

const filtersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SORT_BY:
         return { ...state, sortBy: action.payload };
      case SET_CATEGORY:
         return { ...state, category: action.payload };
      default:
         return state;
   }
};

export default filtersReducer;
