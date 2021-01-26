import axios from "axios";
import {
  CATEGORY_ERROR,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  UPDATE_CATEGORY,
} from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/categories");
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.categories,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};
export const getCategory = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/categories/${slug}`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data.category,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};
export const createCategory = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`/api/categories/create`, data, config);
    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data.savedCategory,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};

export const updateCategory = (data, slug) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/categories/${slug}/update`, data, config);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: res.data.updatedCategory,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};
export const deleteCategory = (slug) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/categories/${slug}/delete`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: res.data.deletedCategory._id,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};