import type { cartItemType } from "../../types/productTypes";
import { BsCartPlus, BsCartDash, BsCartX } from "react-icons/bs";

export const CartItem = ({
  id,
  title,
  price,
  quantity,
  image,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteItem,
}: cartItemType) => {
  const product = {
    id,
    title,
    price,
    image,
    quantity,
  };
  
  return (
    <article className="flex justify-around items-center mb-3">
        <div className="border rounded-lg p-1 h-20 w-20">
          <img
            className="h-full w-full object-contain"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
        <h2 className="flex items-center justify-center p-2 w-1/2">{title}</h2>
        <h3 className="flex justify-center items-center p-2 w-1/10">{price} €</h3>
        <h3 className="flex justify-center items-center p-2 w-1/10">
          Quantité : {quantity}
        </h3>
        <div className="w-1/8 flex justify-evenly items-center">
          <button onClick={() => onIncreaseQuantity(product)}>
            <BsCartPlus size={30} fill="blue"/>
          </button>
          <button onClick={() => onDecreaseQuantity(product)}>
            <BsCartDash size={30} fill="orange"/>
          </button>
          <button onClick={() => onDeleteItem(product)}>
            <BsCartX size={30} fill="red"/>
          </button>
        </div>
      </article>
  );
};
