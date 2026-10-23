import type { FormInputProps } from "../../types/formTypes";

export const FormInput = ({ formInput, register, error }: FormInputProps) => {
  const { name, type, options, label, step, placeholder, required } = formInput;
  return type != "radio" ? (
    <div className="w-full">
      <div className="w-full grid grid-cols-2">
        <label htmlFor={name}>{label} :</label>
        <input
          className={`border border-black bg-gray-100 text-black pl-3 rounded-lg w-80`}
          type={type}
          placeholder={placeholder}
          step={step}
          {...register(name, { required })}
        />
      </div>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  ) : (
    <div className="w-full">
      <label>{label}</label>
      {error && <p className="text-red-600">{error.message}</p>}
      <div className="w-full flex justify-between">
        {options &&
          options.map((option, index) => (
            <div key={index} className="flex justify-center items-center gap-2">
              <input
                type={type}
                value={option}
                {...register(name, { required })}
              />
              <label htmlFor={name}>{option}</label>
            </div>
          ))}
          
      </div>
    </div>
  );
};
