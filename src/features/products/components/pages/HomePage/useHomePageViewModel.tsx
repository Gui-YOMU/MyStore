import { useEffect, useState, type ChangeEvent } from "react";
import { storeRequest } from "../../../../../shared/utils/axios";
import { useStore } from "../../../contexts/StoreContext/StoreContext";
import { useCart } from "../../../hooks/useCart/useCart";
import type { productType } from "../../../types/productTypes";

export const useHomePageViewModel = () => {
  const [productsList, setProductsList] = useState<productType[]>([]);
  const { cartContent } = useStore();
  const { addProductToCart } = useCart();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    storeRequest
      .get("/products")
      .then((res) => {
        const products: productType[] = res.data;
        if (searchValue != "") {
          const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().startsWith(searchValue.toLowerCase()),
          );
          setProductsList(filteredProducts);
        } else {
          setProductsList(products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue]);

  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return {
    productsList,
    cartContent,
    addProductToCart,
    searchValue,
    changeSearchValue,
  };
};
