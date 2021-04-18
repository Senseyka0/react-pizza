import React, { useState } from "react";
import classNames from "classnames";

import Button from "../common/Button";

const PizzaBlock = ({
   id,
   name,
   types,
   sizes,
   imageUrl,
   price,
   onAddPizza,
   addedPizzaCount,
}) => {
   const [selectedType, setSelectedType] = useState(types[0]);
   const [selectedSize, setSelectedSize] = useState(sizes[0]);

   const toggleType = (type) => {
      setSelectedType(type);
   };

   const toggleSize = (size) => {
      setSelectedSize(size);
   };

   const handleAddPizza = () => {
      const obj = {
         id,
         name,
         type: selectedType,
         size: selectedSize,
         imageUrl,
         price,
      };
      onAddPizza(obj);
   };

   return (
      <div className="pizza-block">
         <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
         <h4 className="pizza-block__title">{name}</h4>
         <div className="pizza-block__selector">
            <ul>
               {types.map((type) => (
                  <li
                     className={classNames({
                        active: selectedType === type,
                     })}
                     onClick={() => toggleType(type)}
                     key={type}
                  >
                     {type === "тонкое" ? "тонкое" : "традиционное"}
                  </li>
               ))}
            </ul>
            <ul>
               {sizes.map((size) => (
                  <li
                     className={classNames({
                        active: selectedSize === size,
                     })}
                     onClick={() => toggleSize(size)}
                     key={size}
                  >
                     {size} см.
                  </li>
               ))}
            </ul>
         </div>
         <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <Button className="button--add" onClick={handleAddPizza} outline>
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  />
               </svg>
               <span>Добавить</span>

               {addedPizzaCount > 0 && <i>{addedPizzaCount}</i>}
            </Button>
         </div>
      </div>
   );
};

export default PizzaBlock;
