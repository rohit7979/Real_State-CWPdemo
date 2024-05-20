import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const PasswordInputField = ({ labelName, inputType, placeholder, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <label htmlFor="email" className="text-base font-normal">
        {labelName}
      </label>
      <div className="w-full border py-2.5 px-4 flex items-center rounded-lg">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full outline-none text-sm h-full border-0"
          placeholder={placeholder}
        />
        <button onClick={handleTogglePassword}>
          {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
