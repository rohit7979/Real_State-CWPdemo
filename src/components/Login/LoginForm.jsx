import React from "react";

const LoginForm = ({ showForm, onclick }) => {
  return (
    <>
      {showForm && (
        <div className="w-screen h-screen fixed top-0 right-0 z-50 left-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="bg-white">
            <button onClick={onclick}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
