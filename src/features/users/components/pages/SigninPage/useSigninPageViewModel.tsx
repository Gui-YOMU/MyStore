import { useNavigate } from "react-router"
import type { SigninDataType } from "../../../types/authTypes";
import { useAuthRequest } from "../../../../../shared/utils/axios";

export const useSigninPageViewModel = () => {
    const navigate = useNavigate();

  const onSigninSubmit = (data: SigninDataType) => {
    const authRequest = useAuthRequest()
    authRequest
      .post("/register", data)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return {
    onSigninSubmit
  }
}