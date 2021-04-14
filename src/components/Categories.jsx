import React from "react";

const Categories = React.memo(({ activeCategories, categoriesItems, onClickItem }) => {
   const onSelectCategory = (item) => {
      if (activeCategories === item) {
         return;
      } else {
         onClickItem(item);
      }
   };

   return (
      <div className="categories">
         <ul>
            {categoriesItems.map((item) => (
               <li
                  className={activeCategories === item.id ? "active" : ""}
                  key={item.id}
                  onClick={() => onSelectCategory(item.id)}
               >
                  {item.name}
               </li>
            ))}
         </ul>
      </div>
   );
});

export default Categories;
