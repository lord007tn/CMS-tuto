import {
  CATEGORY_ERROR,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
  category: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        categories: payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case DELETE_CATEGORY:
      return {
          ...state,
          loading:false,
          categories: state.categories.filter(category => category._id !== payload)
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
