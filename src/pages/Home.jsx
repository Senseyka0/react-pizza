import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

import { Categories, SortPopup, PizzaBlock, PizzaBlockLoader } from "../components";

const categoriesItems = [
   { name: "Все", id: 0 },
   { name: "Мясные", id: 1 },
   { name: "Вегетарианская", id: 2 },
   { name: "Гриль", id: 3 },
   { name: "Острые", id: 4 },
   { name: "Закрытые", id: 5 },
];
const sortItems = [
   { name: "популярности", type: "popular" },
   { name: "цене", type: "price" },
   { name: "названию", type: "name" },
];

const Home = () => {
   const dispatch = useDispatch();

   const state = useSelector(({ pizzas, filters, cart }) => {
      return {
         pizzaItems: pizzas.pizzaItems,
         isLoaded: pizzas.isLoaded,
         category: filters.category,
         sortBy: filters.sortBy,
         pizzaCartItems: cart.pizzaCartItems,
      };
   });

   useEffect(() => {
      dispatch(fetchPizzas(state.category, state.sortBy.type));

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [state.category, state.sortBy]);

   const onSelectCategory = useCallback((category) => {
      dispatch(setCategory(category));

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const onSelectSortBy = useCallback((sortBy) => {
      dispatch(setSortBy(sortBy));

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const onAddPizza = (pizzaItem) => {
      dispatch(addPizzaToCart(pizzaItem));
   };

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               activeCategories={state.category}
               onClickItem={onSelectCategory}
               categoriesItems={categoriesItems}
            />
            <SortPopup
               activeSortBy={state.sortBy}
               onClickItem={onSelectSortBy}
               sortItems={sortItems}
            />
         </div>

         <h2 className="content__title">Все пиццы</h2>

         <div className="content__items">
            {state.isLoaded
               ? state.pizzaItems.map((item) => (
                    <PizzaBlock
                       key={item.id}
                       onAddPizza={onAddPizza}
                       addedPizzaCount={
                          state.pizzaCartItems[item.id] &&
                          state.pizzaCartItems[item.id].pizzaCartItems.length
                       }
                       {...item}
                    />
                 ))
               : Array(4)
                    .fill(0)
                    .map((_, index) => <PizzaBlockLoader key={index} />)}
         </div>
      </div>
   );
};

export default Home;
