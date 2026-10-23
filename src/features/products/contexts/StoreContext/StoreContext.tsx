import { createContext, useContext, useEffect, useState } from "react";
import type {
  StoreContextProps,
  StoreContextType,
} from "../../types/contextTypes";
import type { productType } from "../../types/productTypes";

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreProvider = ({ children }: StoreContextProps) => {
  const [cartContent, setCartContent] = useState<productType[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContent));
  }, [cartContent]);

  return (
    <StoreContext value={{ cartContent, setCartContent }}>
      {children}
    </StoreContext>
  );
};

export const useStore = () => {
  const ctxt = useContext(StoreContext);
  if (!ctxt) throw new Error("Le contexte a besoin d'un provider.");
  return ctxt;
};
