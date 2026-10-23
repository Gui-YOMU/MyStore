import { CartItem } from "../../CartItem/CartItem";
import { useCartPageViewModel } from "./useCartPageViewModel";

export const CartPage = () => {
  const vm = useCartPageViewModel();

  return (
    <section className="w-full">
      <div className="flex items-center pb-3">
        <h2 className="font-bold text-2xl w-full">Mon panier</h2>
        <div className="flex items-center justify-between w-3/5 justify-">
          <h3 className="font-bold text-xl w-1/2 text-right">
            Total des achats : {vm.cartTotal} €
          </h3>
          <div className="flex justify-center items-center gap-2 w-1/2">
            <button
              className="w-2/5 p-1 bg-green-400 border rounded-lg"
              onClick={() => alert("Redirection vers la page de paiement")}
            >
              Valider mon panier
            </button>
            <button
              className="p-1 w-2/5 bg-red-400 border rounded-lg"
              onClick={vm.emptyCart}
            >
              Vider le panier
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        {vm.cartContent.map((product, index) => (
          <div key={product.id}>
            <CartItem
              {...product}
              onIncreaseQuantity={vm.increaseQuantity}
              onDecreaseQuantity={vm.decreaseQuantity}
              onDeleteItem={vm.deleteItemFromCart}
            />
            {index != vm.cartContent.length -1 && <hr/>}
          </div>
        ))}
      </div>
    </section>
  );
};
