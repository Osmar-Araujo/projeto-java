import { ENDERECO_REGISTER_REQUEST, ENDEREO_REGISTER_SUCCESS, ENDERECO_REGISTER_FAIL } from "../constants/enderecoConstants";

export const enderecoRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case ENDERECO_REGISTER_REQUEST:
        return { loading: true };
      case ENDEREO_REGISTER_SUCCESS:
        return { loading: false, enderecoInfo: action.payload };
      case ENDERECO_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };