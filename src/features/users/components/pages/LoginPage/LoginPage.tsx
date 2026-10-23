import { Form } from "../../../../../shared/components/Form/Form";

import { loginSchema } from "../../../utils/authZodSchema";
import { loginForm } from "../../../utils/forms";
import { useLoginPageViewModel } from "./useLoginPageViewModel";

export const LoginPage = () => {

  const vm = useLoginPageViewModel();
  
  return (
    <>
      <h2 className="font-bold text-3xl">Connexion</h2>
      <Form {...loginForm} schema={loginSchema} onSubmit={vm.onLoginSubmit} />
    </>
  );
};
