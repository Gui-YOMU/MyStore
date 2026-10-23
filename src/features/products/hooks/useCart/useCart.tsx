import { useStore } from "../../contexts/StoreContext/StoreContext";
import type { productType } from "../../types/productTypes";

export const useCart = () => {
  const { cartContent, setCartContent } = useStore();

  const addProductToCart = (product: productType, newQuantity: number) => {
    const productIndex = cartContent.findIndex(
      (element) => element.id == product.id,
    );
    if (productIndex == -1) {
      const newProduct = { ...product, quantity: newQuantity };
      setCartContent((prev) => [...prev, newProduct]);
    } else {
      setCartContent((prev) =>
        prev.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + newQuantity }
            : item,
        ),
      );
    }
    console.log(cartContent);
  };

  const increaseQuantity = (product: productType) => {
    setCartContent((prev) =>
      prev.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (product: productType) => {
    if (product.quantity == 1) {
      deleteItemFromCart(product)
    }
    setCartContent((prev) =>
      prev.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  const deleteItemFromCart = (product: productType) => {
    setCartContent((prev) => prev.filter((item) => item.id != product.id));
  };

  const emptyCart = () => {
    setCartContent([])
  }

  return {
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItemFromCart,
    emptyCart
  };
};
