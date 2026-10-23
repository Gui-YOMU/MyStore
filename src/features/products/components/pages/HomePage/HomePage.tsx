import type { productType } from "../../../types/productTypes";
import { ProductCard } from "../../ProductCard/ProductCard";
import { useHomePageViewModel } from "./useHomePageViewModel";
import { IoSearchSharp } from "react-icons/io5";

export const HomePage = () => {
  const vm = useHomePageViewModel();
  
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="flex items-center w-full justify-between p-1 mb-2">
          <h2 className="font-bold text-2xl mx-auto">Liste des produits</h2>
          <div className="p-1 flex border rounded-lg items-center gap-2 w-1/5">
            <IoSearchSharp size={20}/>
            <input value={vm.searchValue} onChange={(e) => vm.changeSearchValue(e)} type="text" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1 p-1 w-full">
          {vm.productsList.map((product: productType) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddProduct={vm.addProductToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};
