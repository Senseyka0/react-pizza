import classNames from "classnames";

const Button = ({ outline, children, className, onClick }) => {
   return (
      <button
         className={classNames("button", className, { "button--outline": outline })}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
