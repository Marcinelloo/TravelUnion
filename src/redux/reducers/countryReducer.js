import {
  COUNTRY_OBJCECT_FAIL,
  COUNTRY_OBJCECT_REQUEST,
  COUNTRY_OBJCECT_SUCCESS,
} from "../constants/countryConstants";

export const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_OBJCECT_REQUEST:
      return { loading: true };
    case COUNTRY_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case COUNTRY_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
