import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "./reducers/filters";
import pizzasReducer from "./reducers/pizzas";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
   filters: filtersReducer,
   pizzas: pizzasReducer,
   cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
