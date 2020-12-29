import React from "react";
import PropTypes from "prop-types";

const Register = (props) => {
  return (
    <div className="container bg-gray-100 my-auto">
      <form className="text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <div className="w-full flex gap-2 my-3">
          <input
            type="text"
            placeholder="First Name"
            className="block w-1/2 mx-auto text-sm py-2 px-3 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="block w-1/2 mx-auto text-sm py-2 px-3 rounded focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="block w-full mx-auto text-sm py-2 px-3 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 focus:outline-none"
        />
        <button className="bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent font-bold block mx-auto w-full">
          Register
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
