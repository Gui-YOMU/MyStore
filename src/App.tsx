import { Route, Routes } from "react-router";
import { HomePage } from "./features/products/components/pages/HomePage/HomePage";
import { CategoryPage } from "./features/products/components/pages/CategoryPage/CategoryPage";
import { LoginPage } from "./features/users/components/pages/LoginPage/LoginPage";
import { SigninPage } from "./features/users/components/pages/SigninPage/SigninPage";
import { PrivateRoute } from "./features/users/components/routes/PrivateRoute/PrivateRoute";
import { Header } from "./shared/components/Header/Header";
import { StoreProvider } from "./features/products/contexts/StoreContext/StoreContext";
import { CartPage } from "./features/products/components/pages/CartPage/CartPage";

function App() {
  return (
    <StoreProvider>
      <Header />
      <main className="flex flex-col p-5 items-center justify-center gap-5">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </main>
    </StoreProvider>
  );
}

export default App;
