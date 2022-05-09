import Axios from "axios";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants"

export const register = (name, dtNasc, genero, cpf, tipoTel, tel, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, dtNasc, genero, cpf, tipoTel, tel, email, password } });
  try {
    const { data } = await Axios.post('/api/users/register', {
      name,
      dtNasc,
      genero,
      cpf,
      tipoTel,
      tel,
      email,
      password

    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post('/api/users/login', { username, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  dispatch({ type: USER_SIGNOUT })
}

export const userDetails = (userId, token) => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: { userId } });
  try {
    const { data } = await Axios.get(`/api/users/${userId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: { data } });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const userUpdate = (userId, name, dtNasc, genero, cpf, tipoTel, tel, email, token) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_REQUEST, payload: { userId } });
  try {
    const { data } = await Axios.put(`/api/users/update/${userId}`,
      {
        id: userId,
        name: name,
        dtNasc: dtNasc,
        genero: genero,
        cpf: cpf,
        tipoTel: tipoTel,
        tel: tel,
        email: email
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    dispatch({ type: USER_UPDATE_SUCCESS, payload: { data } });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}