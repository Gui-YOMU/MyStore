import { useParams } from "react-router";
import { useCart } from "../../../hooks/useCart/useCart";
import { useEffect, useState } from "react";
import { storeRequest } from "../../../../../shared/utils/axios";

export const useCategoryPageViewModel = () => {
  const { category } = useParams();

  const { addProductToCart } = useCart();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    storeRequest
      .get(`/products/category/${category}?limit=5&sort=desc`)
      .then((res) => {
        setCategoryProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return {
    category,
    categoryProducts,
    addProductToCart,
  };
};
