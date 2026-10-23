import type { ReactNode } from "react";
import type { productType } from "./productTypes";

export interface StoreContextProps {
    children: ReactNode
}

export interface StoreContextType {
    cartContent: productType[];
    setCartContent: React.Dispatch<React.SetStateAction<productType[]>>
}