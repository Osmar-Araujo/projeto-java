import Axios from "axios";
import { CUPOM_LIST_FAIL, CUPOM_LIST_REQUEST, CUPOM_LIST_SUCCESS, CUPOM_REGISTER_FAIL, CUPOM_REGISTER_REQUEST, CUPOM_REGISTER_SUCCESS } from "../constants/cupomConstants";


export const createCupom = (userId, token, price) => async (dispatch) => {
  dispatch({
    type: CUPOM_REGISTER_REQUEST, payload:
    {
      valorCupom: price,
      usuario: {
        id: userId
      }
    }
  });
  try {
    const { data } = await Axios.post(`/api/cupons/cadastrar`,
      {
        valorCupom: price,
        usuario: {
          id: userId
        }
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    dispatch({ type: CUPOM_REGISTER_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({
      type: CUPOM_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const userListCupom = (userId, token) => async (dispatch) => {
  dispatch({ type: CUPOM_LIST_REQUEST, payload: userId });
  try {
    const { data } = await Axios.get(`/api/cupons/${userId}`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    dispatch({ type: CUPOM_LIST_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({
      type: CUPOM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const detailsCupom = (cupomId, token) => async (dispatch) => {
  dispatch({ type: CUPOM_LIST_REQUEST, payload: cupomId });
  try {
    const { data } = await Axios.get(`/api/cupons/cupom/${cupomId}`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    dispatch({ type: CUPOM_LIST_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({
      type: CUPOM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}