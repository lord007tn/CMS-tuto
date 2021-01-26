import React, { useState } from "react";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth.actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const Register = ({ register, auth }) => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    console.log(registerData);
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      console.log("password not match");
      setRegisterData({ registerData, password: "", confirmPassword: "" });
    } else {
      register(
        registerData.firstName,
        registerData.lastName,
        registerData.email,
        registerData.password
      );
      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      
    }
  };
    if (auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
  return (
    <div className="container mx-auto bg-gray-100 my-auto">
      <form
        onSubmit={(e) => onSubmitData(e)}
        className="text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <div className="w-full flex gap-2 my-3">
          <input
            name="firstName"
            id="firstName"
            value={registerData.firstName}
            type="text"
            placeholder="First Name"
            className="block w-1/2 mx-auto text-sm py-2 px-3 rounded focus:outline-none text-black"
            onChange={(e) => onChangeData(e)}
          />
          <input
            name="lastName"
            id="lastName"
            value={registerData.lastName}
            type="text"
            placeholder="Last Name"
            className="block w-1/2 mx-auto text-sm py-2 px-3 rounded focus:outline-none text-black"
            onChange={(e) => onChangeData(e)}
          />
        </div>
        <input
          name="email"
          id="email"
          value={registerData.email}
          type="text"
          placeholder="Email"
          className="block w-full mx-auto text-sm py-2 px-3 rounded focus:outline-none text-black"
          onChange={(e) => onChangeData(e)}
        />
        <input
          name="password"
          id="password"
          value={registerData.password}
          type="password"
          placeholder="Password"
          className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 focus:outline-none text-black"
          onChange={(e) => onChangeData(e)}
        />
        <input
          name="confirmPassword"
          id="confirmPassword"
          value={registerData.confirmPassword}
          type="password"
          placeholder="Confirm Password"
          className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 focus:outline-none text-black"
          onChange={(e) => onChangeData(e)}
        />
        <button className="bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent font-bold block mx-auto w-full">
          Register
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { register })(Register);
