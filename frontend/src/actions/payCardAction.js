import Axios from "axios";
import { PAYCARD_REGISTER_FAIL, PAYCARD_REGISTER_REQUEST, PAYCARD_REGISTER_SUCCESS } from "../constants/payCardConstants"


export const registerPayCard = (idUsuario, number, cardHolderName, cvc, dueData) => async (dispatch) => {
  dispatch({ type: PAYCARD_REGISTER_REQUEST, payload: { idUsuario, number, cardHolderName, cvc, dueData } });
  try {
    const { data } = await Axios.post('/api/cartoes/cadastrar', {
      idUsuario, number, cardHolderName, cvc, dueData
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