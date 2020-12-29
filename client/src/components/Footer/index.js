import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="bg-gray-200 w-full py-6 px-4 my-32 ">
      <div className="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl text-left inline-block font-semibold text-gray-800">
            Join Our Newsletter
          </h2>
          <p className="text-gray-700 text-xs pl-px">
            Latest news ,articles and updates montly delevered to your inbox.
          </p>
          <form action="#" className="mt-2">
            <div className="flex items-center">
              <input
                type="email"
                className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"
                required
              />
              <button className="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
