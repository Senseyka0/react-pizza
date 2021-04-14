import { SET_PIZZAS, TOGGLE_LOADING } from "../constants/pizzas";

const initialState = {
   pizzaItems: [],
   isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PIZZAS:
         return {
            ...state,
            pizzaItems: action.payload,
            isLoaded: true,
         };
      case TOGGLE_LOADING: {
         return {
            ...state,
            isLoaded: action.payload,
         };
      }
      default:
         return state;
   }
};

export default pizzasReducer;
