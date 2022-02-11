import { OPINIONS_BY_OFFER_OBJCECT_FAIL, OPINIONS_BY_OFFER_OBJCECT_REQUEST, OPINIONS_BY_OFFER_OBJCECT_SUCCESS, OPINIONS_BY_USER_OBJCECT_FAIL, OPINIONS_BY_USER_OBJCECT_REQUEST, OPINIONS_BY_USER_OBJCECT_SUCCESS } from "../constants/opinionConstant";
import {
 
} from "../constants/userConstants";

export const opinionByOfferReducer = (state = {}, action) => {
  switch (action.type) {
    case OPINIONS_BY_OFFER_OBJCECT_REQUEST:
      return { loading: true };
    case OPINIONS_BY_OFFER_OBJCECT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case OPINIONS_BY_OFFER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const opinionByUserReducer = (state = {}, action) => {
  switch (action.type) {
    case OPINIONS_BY_USER_OBJCECT_REQUEST:
      return { loading: true };
    case OPINIONS_BY_USER_OBJCECT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case OPINIONS_BY_USER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
