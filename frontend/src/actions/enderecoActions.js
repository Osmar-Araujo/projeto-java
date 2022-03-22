import Axios from "axios";
import { END_REGISTER_FAIL, END_REGISTER_REQUEST, END_REGISTER_SUCCESS, END_REQUEST, END_REQUEST_SUCESS, END_REQUEST_FAIL } from "../constants/endConstants"


export const registerAddress = (apelido, idUsuario, address, city, postalCode, state, numero, bairro) => async (dispatch) => {
  dispatch({ type: END_REGISTER_REQUEST, payload: { apelido, idUsuario, address, city, postalCode, state, numero, bairro } });
  try {
    const { data } = await Axios.post('/api/enderecos/cadastrar', {
      apelido, idUsuario, address, city, postalCode, state, numero, bairro
    });
    dispatch({ type: END_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("address", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: END_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const enderecosUsuario = (idUsuario) => async (dispatch) => {
  dispatch({ type: END_REQUEST, payload: idUsuario });
  try {
    const { data } = await Axios.get(`/api/enderecos/${Number(idUsuario)}`);
    dispatch({ type: END_REQUEST_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: END_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
