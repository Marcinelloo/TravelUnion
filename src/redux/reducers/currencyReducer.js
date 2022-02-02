import {
  CURRENCY_OBJCECT_FAIL,
  CURRENCY_OBJCECT_REQUEST,
  CURRENCY_OBJCECT_SUCCESS,
} from "../constants/currencyConstants";

export const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_OBJCECT_REQUEST:
      return { loading: true };
    case CURRENCY_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case CURRENCY_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
