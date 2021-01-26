import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const SideBar = props => {
    return (
      <aside className="bg-gray-700 w-1/6 h-screen">
        <ul className="py-4">
          <li className=" font-semibold text-xl my-1 border-l-4 border-transparent px-4 py-2 hover:border-gray-300 hover:bg-gray-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2">
              <path
                fill="currentColor"
                d="M12 .648L7 5.194V3H4v4.921L.327 11.26l1.346 1.48L3 11.534V22a1 1 0 001 1h6v-6h4v6h6a1 1 0 001-1V11.534l1.327 1.207 1.346-1.48L12 .648zM14 13h-4V9h4v4z"
              />
            </svg>
            <Link to="/dashboard">Home</Link>
          </li>
          <li className=" font-semibold text-xl my-1 border-l-4 border-transparent px-4 py-2 hover:border-gray-300 hover:bg-gray-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2">
              <g fill="currentColor">
                <path
                  fill="currentColor"
                  d="M11 10H2v13a1 1 0 001 1h8V10zM22 10h-9v14h8a1 1 0 001-1V10z"
                />
              </g>
            </svg>
            <Link to="/dashboard/categories">Categories</Link>
          </li>
          <li className=" font-semibold text-xl my-1 border-l-4 border-transparent px-4 py-2 hover:border-gray-300 hover:bg-gray-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2">
              <path
                fill="currentColor"
                d="M22.3 3.9l-2.2-2.2C19 .6 17 .6 15.9 1.7L2.3 15.3c-.1.1-.1.2-.2.3v.2l-1 6c-.1.3.1.6.3.9.1.2.3.3.6.3h.2l6-1h.2c.1 0 .2-.1.3-.2L22.3 8.1c1.2-1.1 1.2-3.1 0-4.2zM17 10.6L13.4 7l2.3-2.3 3.6 3.6-2.3 2.3z"
              />
            </svg>
            <Link to="/dashboard/articles">Articles</Link>
          </li>
        </ul>
      </aside>
    );
}

SideBar.propTypes = {

}

export default SideBar
