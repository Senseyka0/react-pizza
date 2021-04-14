import {
   ADD_PIZZA_TO_CART,
   SET_TOTAL_PRICE,
   SET_TOTAL_COUNT,
   PLUS_PIZZA_TO_CART,
   MINUS_PIZZA_TO_CART,
   CLEAR_CART_ITEMS,
   REMOVE_CART_ITEM,
} from "../constants/cart";

const initialState = {
   pizzaCartItems: {},
   totalPrice: 0,
   totalCount: 0,
};

const _get = (obj, path) => {
   const [firstKey, ...keys] = path.split(".");
   return keys.reduce((val, key) => {
      return val[key];
   }, obj[firstKey]);
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const getTotalSum = (obj, path) => {
   return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
   }, 0);
};

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PIZZA_TO_CART: {
         const currentPizzaItems = !state.pizzaCartItems[action.payload.id]
            ? [action.payload]
            : [...state.pizzaCartItems[action.payload.id].pizzaCartItems, action.payload];

         const newItems = {
            ...state.pizzaCartItems,
            [action.payload.id]: {
               pizzaCartItems: currentPizzaItems,
               totalPrice: getTotalPrice(currentPizzaItems),
            },
         };

         return {
            ...state,
            pizzaCartItems: newItems,
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.payload.price,
         };
      }

      case SET_TOTAL_PRICE:
         return {
            ...state,
            totalPrice: action.payload,
         };
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.payload,
         };

      case PLUS_PIZZA_TO_CART: {
         const newObjItems = [
            ...state.pizzaCartItems[action.payload].pizzaCartItems,
            state.pizzaCartItems[action.payload].pizzaCartItems[0],
         ];
         const newItems = {
            ...state.pizzaCartItems,
            [action.payload]: {
               pizzaCartItems: newObjItems,
               totalPrice: getTotalPrice(newObjItems),
            },
         };

         const totalCount = getTotalSum(newItems, "pizzaCartItems.length");
         const totalPrice = getTotalSum(newItems, "totalPrice");

         return {
            ...state,
            pizzaCartItems: newItems,
            totalCount,
            totalPrice,
         };
      }
      case MINUS_PIZZA_TO_CART: {
         const oldItems = state.pizzaCartItems[action.payload].pizzaCartItems;
         const newObjItems =
            oldItems.length > 1
               ? state.pizzaCartItems[action.payload].pizzaCartItems.slice(1)
               : oldItems;
         const newItems = {
            ...state.pizzaCartItems,
            [action.payload]: {
               pizzaCartItems: newObjItems,
               totalPrice: getTotalPrice(newObjItems),
            },
         };

         const totalCount = getTotalSum(newItems, "pizzaCartItems.length");
         const totalPrice = getTotalSum(newItems, "totalPrice");

         return {
            ...state,
            pizzaCartItems: newItems,
            totalCount,
            totalPrice,
         };
      }

      case REMOVE_CART_ITEM: {
         const newItems = {
            ...state.pizzaCartItems,
         };
         const currentTotalPrice = newItems[action.payload].totalPrice;
         const currentTotalCount = newItems[action.payload].pizzaCartItems.length;
         delete newItems[action.payload];

         return {
            ...state,
            pizzaCartItems: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
         };
      }
      case CLEAR_CART_ITEMS:
         return {
            ...state,
            pizzaCartItems: {},
            totalPrice: 0,
            totalCount: 0,
         };

      default:
         return state;
   }
};

export default cartReducer;
