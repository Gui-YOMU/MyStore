import { Form } from "../../../../../shared/components/Form/Form";
import { signinForm } from "../../../utils/forms";
import { signinSchema } from "../../../utils/authZodSchema";
import { useSigninPageViewModel } from "./useSigninPageViewModel";

export const SigninPage = () => {
  const vm = useSigninPageViewModel();
  
  return (
    <>
      <h2 className="font-bold text-3xl">Inscription</h2>
      <Form {...signinForm} schema={signinSchema} onSubmit={vm.onSigninSubmit} />
    </>
  )
}