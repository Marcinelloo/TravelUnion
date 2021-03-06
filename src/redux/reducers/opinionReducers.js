import {
  OPINIONS_BY_OFFER_OBJCECT_FAIL,
  OPINIONS_BY_OFFER_OBJCECT_REQUEST,
  OPINIONS_BY_OFFER_OBJCECT_SUCCESS,
  OPINIONS_BY_USER_OBJCECT_FAIL,
  OPINIONS_BY_USER_OBJCECT_REQUEST,
  OPINIONS_BY_USER_OBJCECT_SUCCESS,
  DELETE_BY_USER_OBJCECT_REQUEST,
  DELETE_BY_USER_OBJCECT_SUCCESS,
  DELETE_BY_USER_OBJCECT_FAIL,
  UPGRADE_BY_USER_OBJCECT_REQUEST,
  UPGRADE_BY_USER_OBJCECT_SUCCESS,
  UPGRADE_BY_USER_OBJCECT_FAIL,
  CREATE_OPINION_BY_USER_OBJCECT_REQUEST,
  CREATE_OPINION_BY_USER_OBJCECT_SUCCESS,
  CREATE_OPINION_BY_USER_OBJCECT_FAIL,
  OPINION_ID_OBJCECT_REQUEST,
  OPINION_ID_OBJCECT_SUCCESS,
  OPINION_ID_OBJCECT_FAIL,
  
} from "../constants/opinionConstant";
import {} from "../constants/userConstants";

export const getOpinionByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case OPINION_ID_OBJCECT_REQUEST:
      return { loading: true };
    case OPINION_ID_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
    case OPINION_ID_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createOpinionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_OPINION_BY_USER_OBJCECT_REQUEST:
      return { loading: true };
    case CREATE_OPINION_BY_USER_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
    case CREATE_OPINION_BY_USER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const opinionByOfferReducer = (state = {}, action) => {
  switch (action.type) {
    case OPINIONS_BY_OFFER_OBJCECT_REQUEST:
      return { loading: true };
    case OPINIONS_BY_OFFER_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
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
      return { loading: false, object: action.payload };
    case OPINIONS_BY_USER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteOinionByUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BY_USER_OBJCECT_REQUEST:
      return { loading: true };
    case DELETE_BY_USER_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
    case DELETE_BY_USER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const upgradeOpinionByUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UPGRADE_BY_USER_OBJCECT_REQUEST:
      return { loading: true };
    case UPGRADE_BY_USER_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
    case UPGRADE_BY_USER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
