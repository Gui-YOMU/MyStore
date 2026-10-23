import z from "zod";
import type ReactHookFormTypes from "./reactHookFormTypes";

export interface FormInputType {
  name: string;
  type: string;
  options?: string[];
  step?: number;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface FormInputProps {
  formInput: FormInputType;
  register: ReactHookFormTypes.UseFormRegister<any>;
  error:
    | ReactHookFormTypes.Merge<
        ReactHookFormTypes.FieldError,
        ReactHookFormTypes.FieldErrorsImpl<{}>
      >
    | undefined;
}

export interface FormProps {
  fields: FormInputType[];
  button: string;
  schema: z.ZodObject<any>;
  onSubmit: (args: any) => any;
}
