import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADED,
  USER_LOADING,
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispatch => {
  dispatch({
    type: USER_LOADING
  })

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/auth/authcheck')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
        dispatch({
          type: AUTH_ERROR,
          payload: err,
        });
  }
}
export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
      const res = await axios.post("/api/auth/login", {email: email, password: password}, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
      console.log(err)
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const register = (firstName, lastName, email, password) => async (
  dispatch
) => {
  dispatch({
    type: USER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = JSON.stringify({ firstName, lastName, email, password });

  try {
    const res = await axios.post("/api/auth/register", data, config);

    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  dispatch({
    type: LOGOUT,
  });
};
