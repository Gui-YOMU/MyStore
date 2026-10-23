import { useState } from "react";
import type { productType } from "../../types/productTypes";
import { FaCartPlus } from "react-icons/fa";

export const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  onAddProduct,
}: productType) => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    quantity,
    onAddProduct,
  };

  return (
    <article className="border-2 rounded-lg p-3 h-120 flex flex-col justify-center gap-1">
      <h2 className="font-bold italic text-center h-1/9">{category}</h2>
      <div className="w-9/10 h-1/3 mx-auto">
        <img
          className="size-full object-contain"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      <h2 className="font-bold text-center h-1/6">{title}</h2>
      <p className="text-sm text-center h-1/3 overflow-y-auto">{description}</p>
      <div className="flex justify-around items-center h-1/8">
        <h3>Prix : {price} €</h3>
        <div>
          <label htmlFor="quantity">Quantité : </label>
          <input
            className="border w-8 rounded-lg text-center"
            value={quantity}
            onChange={(e) => setQuantity(Math.min(parseInt(e.target.value), 9))}
            type="number"
            min={0}
            max={9}
          />
        </div>
        <button className="cursor-pointer" onClick={() => onAddProduct(product, quantity)}>
          <FaCartPlus size={30} color="green" />
        </button>
      </div>
    </article>
  );
};
