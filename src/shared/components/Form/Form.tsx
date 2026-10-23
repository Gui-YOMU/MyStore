import { useForm } from "react-hook-form";
import type { FormProps } from "../../types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../FormInput/FormInput";

export const Form = ({ fields, button, schema, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  return (
    <>
      <form
        className="flex flex-col h-full items-center justify-between"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {fields.map((field) => (
            <FormInput
              key={field.name}
              formInput={field}
              register={register}
              error={errors[field.name]}
            />
          ))}
        </div>
        <button className="border border-blue-900 bg-blue-300 px-3 rounded-xl mt-5 cursor-pointer">
          {button}
        </button>
      </form>
    </>
  );
};
