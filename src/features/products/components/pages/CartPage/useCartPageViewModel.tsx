import { useStore } from "../../../contexts/StoreContext/StoreContext";
import { useCart } from "../../../hooks/useCart/useCart";

export const useCartPageViewModel = () => {
  const { cartContent } = useStore();
  const { increaseQuantity, decreaseQuantity, deleteItemFromCart, emptyCart } =
    useCart();

  const cartTotal = cartContent
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0,
    )
    .toFixed(2);

  return {
    cartContent,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    deleteItemFromCart,
    emptyCart,
  };
};
