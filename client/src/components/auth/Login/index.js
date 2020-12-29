import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
    return (
      <div className="container bg-gray-100 my-auto">
        <form className="bg-blue text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
          <input
            type="text"
            placeholder="Email"
            className="block w-full mx-auto text-sm py-2 px-3 rounded"
          />
          <input
            type="text"
            placeholder="Password"
            className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
          />
          <button className="bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent font-bold block mx-auto w-full">
            Login
          </button>
        </form>
      </div>
    );
}

Login.propTypes = {

}

export default Login
