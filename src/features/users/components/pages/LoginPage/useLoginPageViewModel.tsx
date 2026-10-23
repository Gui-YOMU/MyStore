import { useNavigate } from "react-router";
import { useAuthRequest } from "../../../../../shared/utils/axios";
import type { LoginDataType } from "../../../types/authTypes";

export const useLoginPageViewModel = () => {
  const navigate = useNavigate();

  const onLoginSubmit = (data: LoginDataType) => {
    const auth = useAuthRequest()
    auth
      .post("/login", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    onLoginSubmit
  };
};
