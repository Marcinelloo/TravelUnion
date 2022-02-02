import {
  CITY_OBJCECT_FAIL,
  CITY_OBJCECT_REQUEST,
  CITY_OBJCECT_SUCCESS,
} from "../constants/cityConstants";

export const cityReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_OBJCECT_REQUEST:
      return { loading: true };
    case CITY_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case CITY_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
