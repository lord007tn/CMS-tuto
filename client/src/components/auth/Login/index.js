import React, { useState } from "react";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth.actions";
import { connect } from "react-redux";

const Login = ({ login, auth }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password);
  };
  return (
    <div className="container bg-gray-100 my-auto">
      <form
        onSubmit={(e) => onSubmitData(e)}
        className="bg-blue text-center w-1/3 px-3 py-4 text-black mx-auto rounded">
        <input
          onChange={(e) => onChangeData(e)}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="block w-full mx-auto text-sm py-2 px-3 rounded focus:outline-none"
        />
        <input
          onChange={(e) => onChangeData(e)}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent font-bold block mx-auto w-full">
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
