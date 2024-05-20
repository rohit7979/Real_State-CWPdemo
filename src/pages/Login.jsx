import React from "react";
import { IoClose } from "react-icons/io5";
import InputField from "../components/Global/InputField";
import PasswordInputField from "../components/Global/PasswordInputField";
import { Link } from "react-router-dom";

const Login = ({ showForm, onclick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {showForm && (
        <div className="w-screen h-screen fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-50">
          <form
            onSubmit={handleSubmit}
            className={`w-[90%] h-auto md:h-[92vh] lg:w-2/6 bg-white lg:h-[500px] rounded-xl p-8 md:p-8 xl:p-12 z-50 relative flex flex-col justify-center gap-6`}
          >
            <button
              onClick={onclick}
              className="bg-gray-100 w-8 h-8 rounded-full p-1.5 absolute top-4 right-4 outline-none"
            >
              <IoClose className="w-full h-full" />
            </button>
            <div className="w-full mt-3 md:mt-0">
              <h1 className="text-2xl font-semibold text-center">
                Welcome back! Login
              </h1>
            </div>
            <InputField inputType={"email"} labelName={"Email"} value={""} />
            <PasswordInputField labelName={"Password"} value={""} />
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white text-sm font-medium rounded-lg py-2.5 mt-3"
              >
                Login
              </button>
              <div className="text-end mt-1">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-gray-500"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <p className="text-sm font-medium text-center text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-black">
                Register
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
