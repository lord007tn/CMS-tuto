import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="bg-gray-200 p-2 flex flex-1 justify-between my-auto">
          <div className="font-bold text-3xl my-auto">
              <Link to="/">CMS</Link>
      </div>
      <div className="mx-2 my-auto">
        <Link className="font-semibold text-black mx-2 my-auto hover:underline focus:underline " to="/categories">
          Categories
        </Link>
        <Link className="font-semibold text-black mx-2 my-auto hover:underline focus:underline " to="/articles">
          Articles
        </Link>
      </div>
      <div className=" mx-2 my-auto">
        <Link to="/login" className=" bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent">login</Link>
        <Link to="/register" className=" bg-gray-700 text-gray-200 p-3 ml-1 rounded hover:text-gray-700 hover:bg-transparent">Register</Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
