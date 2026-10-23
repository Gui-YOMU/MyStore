import type { productType } from "../../../types/productTypes";
import { ProductCard } from "../../ProductCard/ProductCard";
import { useCategoryPageViewModel } from "./useCategoryPageViewModel";

export const CategoryPage = () => {
  const vm = useCategoryPageViewModel();

  return (
    <>
      <section>
        <h2 className="w-full p-1 mb-2 font-bold text-2xl text-center">Liste des produits de la catégorie "{vm.category}"</h2>
        <div className="grid grid-cols-5 gap-1 p-1">
          {vm.categoryProducts.map((product: productType) => (
            <ProductCard key={product.id} {...product} onAddProduct={vm.addProductToCart} />
          ))}
        </div>
      </section>
    </>
  );
};
