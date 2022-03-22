import {
  END_REGISTER_REQUEST,
  END_REGISTER_SUCCESS,
  END_REGISTER_FAIL,
  END_REQUEST,
  END_REQUEST_SUCESS,
  END_REQUEST_FAIL,
} from "../constants/endConstants";

export const endRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case END_REGISTER_REQUEST:
      return { loading: true };
    case END_REGISTER_SUCCESS:
      return { loading: false, endInfo: action.payload };
    case END_REGISTER_FAIL:
      return { loading: false, error: action.payload };
     
      default:
      return state;
  }
};

export const endListReducer = (
  state = { loading: true, enderecos: [] },
  action
) => {
  switch (action.type) {
    case END_REQUEST:
      return { loading: true };
      case END_REQUEST_SUCESS:
        return { loading: false, endInfo: action.payload};
      case END_REQUEST_FAIL:
        return { loading: false, error:action.payload};
    default:
      return state;
  }
}


