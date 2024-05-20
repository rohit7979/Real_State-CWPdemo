import React from "react";

const InputField = ({ labelName, inputType, placeholder, value }) => {
  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <label htmlFor="email" className="text-base font-normal">
        {labelName}
      </label>
      <input
        type={inputType}
        className="border rounded-lg py-2.5 px-4 w-full outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
