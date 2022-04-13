import Axios from "axios";
import {
  PAYCARD_LIST_FAIL, PAYCARD_LIST_REQUEST, PAYCARD_LIST_SUCCESS, PAYCARD_REGISTER_FAIL,
  PAYCARD_REGISTER_REQUEST,
  PAYCARD_REGISTER_SUCCESS
} from "../constants/payCardConstants"


export const registerPayCard = (id, bandeira, number, cardHolderName, cvc, dueData, token) => async (dispatch) => {
  dispatch({ type: PAYCARD_REGISTER_REQUEST, payload: { id, bandeira, number, cardHolderName, cvc, dueData } });
  try {
    const { data } = await Axios.post('/api/cards/cadastrar', {
      usuario: { id }, bandeira, number, cardHolderName, cvc, dueData
    }, {
      headers: {
        authorization: "Bearer " + token
      }
    });
    dispatch({ type: PAYCARD_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("payCardInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PAYCARD_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPayCardsUsuario = (idUsuario, token) => async (dispatch) => {
  dispatch({ type: PAYCARD_LIST_REQUEST, payload: idUsuario });
  try {
    const { data } = await Axios.get(`/api/cards/${idUsuario}`, {
      headers: {
        authorization: "Bearer " + token
      }
    });
    dispatch({ type: PAYCARD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PAYCARD_LIST_FAIL,
      payload: error.message
    });
  }
};