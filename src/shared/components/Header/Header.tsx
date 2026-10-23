import { IoIosLogOut } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import { useHeaderViewModel } from "./useHeaderViewModel";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { addProductForm } from "../../../features/products/utils/forms";
import { productSchema } from "../../../features/products/utils/productZodSchema";
import { IoStorefront } from "react-icons/io5";
import { CartButton } from "../../../features/products/components/CartButton/CartButton";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const vm = useHeaderViewModel();

  return (
    <header className="h-20 py-2 px-5 bg-amber-200 flex justify-between items-center sticky top-0">
      <Link
        className="border p-1 rounded-lg bg-white cursor-pointer mr-10"
        to={"/"}
      >
        <IoStorefront size={45} />
      </Link>
      {vm.isConnected && (
        <div className="relative">
          <button
            onClick={vm.drawer.toggle}
            className={`border rounded-lg ${vm.drawer.isOn ? "bg-gray-400" : "bg-gray-200"} text-center w-full px-1 flex items-center gap-3`}
          >
            Catégories
            {vm.drawer.isOn ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {vm.drawer.isOn && (
            <nav className="border absolute top-full left-0 mt-2 flex flex-col gap-1 bg-gray-400 p-2 rounded-lg shadow-md min-w-fit z-50">
              {vm.categories.map((category) => (
                <Link
                  className="border rounded-lg bg-white text-center w-40 px-1"
                  key={category}
                  to={`/category/${category}`}
                >
                  {category}
                </Link>
              ))}
            </nav>
          )}
        </div>
      )}
      <h1 className="mx-auto text-3xl">Bienvenue sur MyStore</h1>
      <nav className="p-2 flex gap-4">
        {vm.isConnected ? (
          <>
            <Link to={"/cart"}>
              <CartButton length={vm.cartLength} />
            </Link>

            <button
              className="border p-1 rounded-lg bg-blue-400 cursor-pointer"
              onClick={vm.modal.toggle}
            >
              <FiPlus size={30} />
            </button>

            <button
              className="border p-1 rounded-lg bg-red-400 cursor-pointer"
              onClick={vm.onLogout}
            >
              <IoIosLogOut size={30} />
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>Connexion</Link>
            <Link to={"/signin"}>Inscription</Link>
          </>
        )}
      </nav>

      <Modal
        open={vm.modal.isOn}
        onClose={vm.modal.toggle}
        title="Ajouter un produit"
      >
        <Form
          {...addProductForm(vm.categories)}
          schema={productSchema}
          onSubmit={vm.onAddProductSubmit}
        />
      </Modal>
    </header>
  );
};
