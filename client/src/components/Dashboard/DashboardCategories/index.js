import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCategories,
  createCategory,
} from "../../../actions/category.actions";
const DashboardCategories = ({
  auth,
  category,
  getCategories,
  createCategory,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    categorySlug: "",
    description: "",
    writer: "",
  });
  const onChangeData = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
    console.log(categoryData);
  };
  const onAddCategory = (e) => {
    e.preventDefault();
    createCategory({
      categoryName: categoryData.categoryName,
      description: categoryData.description,
    });
    setCategoryData({
      categoryName: "",
      categorySlug: "",
      description: "",
      writer: "",
    });
  };
  return (
    <Fragment>
      <div
        className={`fixed w-full bg-gray-800 bg-opacity-30 h-100 inset-0 z-50 overflow-hidden flex justify-center items-center ${
          isModalOpen ? "block" : "hidden"
        }`}>
        <div className="border border-gray-600 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Add Category</p>
              <button className="z-50" onClick={(e) => setIsModalOpen(false)}>
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
            <div className="my-5">
              <form
                onSubmit={(e) => onAddCategory(e)}
                className="text-center text-white">
                <input
                  name="categoryName"
                  id="categoryName"
                  value={categoryData.categoryName}
                  type="text"
                  placeholder="Category Name"
                  className="block w-full text-sm py-2 px-3 rounded focus:outline-none text-black"
                  onChange={(e) => onChangeData(e)}
                />
                <textarea
                  name="description"
                  id="description"
                  value={categoryData.description}
                  type="text"
                  placeholder="Description"
                  className="block w-full text-sm py-2 px-3 rounded focus:outline-none text-black"
                  onChange={(e) => onChangeData(e)}
                />
                <div className="flex justify-end pt-2">
                  <button
                    className="focus:outline-none px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                    onClick={(e) => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="focus:outline-none px-4 bg-gray-600 p-3 ml-3 rounded-lg text-black hover:bg-green-600">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-4 mx-6">
        <div className="flex my-8 justify-between">
          <h1 className="font-bold text-2xl">Categories</h1>
          <button
            className="bg-gray-700 text-gray-200 p-3 mr-1 rounded hover:text-gray-700 hover:bg-transparent"
            onClick={(e) => setIsModalOpen(true)}>
            Create
          </button>
        </div>
        <table className="text-left w-full">
          <thead className="bg-black flex text-white w-full">
            <tr className="flex w-full mb-4">
              <th className="p-4 w-1/4">Category Name</th>
              <th className="p-4 w-1/4">Category Slug</th>
              <th className="p-4 w-1/4">Category Description</th>
              <th className="p-4 w-1/4">Writer</th>
            </tr>
          </thead>
          <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

DashboardCategories.propTypes = {
  category: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  createCategory: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
  auth: state.auth,
});
export default connect(mapStateToProps, { createCategory, getCategories })(
  DashboardCategories
);
