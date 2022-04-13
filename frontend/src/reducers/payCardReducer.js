import {
  PAYCARD_REGISTER_FAIL,
  PAYCARD_REGISTER_SUCCESS,
  PAYCARD_REGISTER_REQUEST,
  PAYCARD_LIST_REQUEST,
  PAYCARD_LIST_SUCCESS,
  PAYCARD_LIST_FAIL
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

export const payCardListReducer = (state = { loading: true, payCards: [] }, action) => {
  switch (action.type) {
    case PAYCARD_LIST_REQUEST:
      return { loading: true };
    case PAYCARD_LIST_SUCCESS:
      return { loading: false, payCards: action.payload };
    case PAYCARD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}