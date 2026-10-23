import { FaShoppingCart } from "react-icons/fa";

export const CartButton = ({ length }: { length: number }) => {
  return (
    <div className="relative">
      <button className="border p-1 rounded-lg bg-green-400 cursor-pointer">
        <FaShoppingCart size={30} />
      </button>
      <p className="bg-white font-bold border flex justify-center items-center size-5 text-sm rounded-lg p-1 absolute top-3/4 left-3/4">
        {length}
      </p>
    </div>
  );
};
