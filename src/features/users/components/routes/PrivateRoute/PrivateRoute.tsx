import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthRequest } from "../../../../../shared/utils/axios";
import { Loader } from "../../../../../shared/components/Loader/Loader";

export const PrivateRoute = () => {
  const navigate = useNavigate();

  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = useAuthRequest();

  auth
    .get("/me")
    .then(() => {
      setIsConnected(true);
    })
    .catch((err) => {
      console.log(err);
      setIsConnected(false);
      sessionStorage.removeItem("token");
      navigate("/login");
    })
    .finally(() => {
      setIsLoading(false);
    });

  return (
    <>
      {isLoading && <Loader />}
      {isConnected && <Outlet />}
    </>
  );
};
