import {
  PAYCARD_REGISTER_FAIL,
  PAYCARD_REGISTER_SUCCESS,
  PAYCARD_REGISTER_REQUEST
} from "../constants/payCardConstants"

export const payCardRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYCARD_REGISTER_REQUEST:
      return { loading: true };
    case PAYCARD_REGISTER_SUCCESS:
      return { loading: false, payCardInfo: action.payload };
    case PAYCARD_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};