import {
  OFFEROURCHOICE_OBJCECT_FAIL,
  OFFEROURCHOICE_OBJCECT_REQUEST,
  OFFEROURCHOICE_OBJCECT_SUCCESS,
  OFFERTHEBEST_OBJCECT_FAIL,
  OFFERTHEBEST_OBJCECT_REQUEST,
  OFFERTHEBEST_OBJCECT_SUCCESS,
  OFFER_OBJCECT_FAIL,
  OFFER_OBJCECT_REQUEST,
  OFFER_OBJCECT_SUCCESS,
  OFFER_BY_ID_OBJCECT_REQUEST,
  OFFER_BY_ID_OBJCECT_SUCCESS,
  OFFER_BY_ID_OBJCECT_FAIL,
} from "../constants/offerConstants";

export const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_OBJCECT_REQUEST:
      return { loading: true };
    case OFFER_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case OFFER_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const theBestReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFERTHEBEST_OBJCECT_REQUEST:
      return { loading: true };
    case OFFERTHEBEST_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case OFFERTHEBEST_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ourChoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFEROURCHOICE_OBJCECT_REQUEST:
      return { loading: true };
    case OFFEROURCHOICE_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case OFFEROURCHOICE_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const offerByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_BY_ID_OBJCECT_REQUEST:
      return { loading: true };
    case OFFER_BY_ID_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case OFFER_BY_ID_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
