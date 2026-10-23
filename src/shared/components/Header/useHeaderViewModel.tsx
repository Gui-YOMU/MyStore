import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useToggle } from "../../hooks/useToggle";
import { storeRequest } from "../../utils/axios";
import type { productType } from "../../../features/products/types/productTypes";
import { useStore } from "../../../features/products/contexts/StoreContext/StoreContext";

export const useHeaderViewModel = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const [categories, setCategories] = useState([]);
  const modal = useToggle();
  const drawer = useToggle();
  const { cartContent } = useStore();

  const onLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
    setIsConnected(false);
  };

  useEffect(() => {
    if (Boolean(sessionStorage.getItem("token"))) {
      setIsConnected(true);
    }
  }, [sessionStorage.length]);

  useEffect(() => {
    storeRequest
      .get("/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onAddProductSubmit = (data: productType) => {
    storeRequest
      .post("/products", data)
      .then(() => {
        modal.toggle();
        alert("Le produit a été ajouté avec succès.")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cartLength = cartContent.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  return {
    isConnected,
    onLogout,
    modal,
    drawer,
    categories,
    onAddProductSubmit,
    cartLength,
  };
};
