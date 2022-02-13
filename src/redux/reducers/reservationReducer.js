import {
  ADD_RESERVATION_OBJCECT_FAIL,
  ADD_RESERVATION_OBJCECT_REQUEST,
  ADD_RESERVATION_OBJCECT_SUCCESS,
  DELETE_RESERVATION_OBJCECT_FAIL,
  DELETE_RESERVATION_OBJCECT_REQUEST,
  DELETE_RESERVATION_OBJCECT_SUCCESS,
  GET_USER_RESERVATION_OBJCECT_REQUEST,
  GET_USER_RESERVATION_OBJCECT_SUCCESS,
  GET_USER_RESERVATION_OBJCECT_FAIL,
  UPDATE_RESERVATION_OBJCECT_REQUEST,
  UPDATE_RESERVATION_OBJCECT_SUCCESS,
  UPDATE_RESERVATION_OBJCECT_FAIL,
  GET_BY_ID_RESERVATION_OBJCECT_REQUEST,
  GET_BY_ID_RESERVATION_OBJCECT_SUCCESS,
  GET_BY_ID_RESERVATION_OBJCECT_FAIL,
} from "../constants/reservationConstant";

export const reservationByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BY_ID_RESERVATION_OBJCECT_REQUEST:
      return { loading: true };
    case GET_BY_ID_RESERVATION_OBJCECT_SUCCESS:
      return { loading: false, object: action.payload };
    case GET_BY_ID_RESERVATION_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RESERVATION_OBJCECT_REQUEST:
      return { loading: true };
    case ADD_RESERVATION_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case ADD_RESERVATION_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_RESERVATION_OBJCECT_REQUEST:
      return { loading: true };
    case DELETE_RESERVATION_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case DELETE_RESERVATION_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_RESERVATION_OBJCECT_REQUEST:
      return { loading: true };
    case GET_USER_RESERVATION_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case GET_USER_RESERVATION_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatetUserReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RESERVATION_OBJCECT_REQUEST:
      return { loading: true };
    case UPDATE_RESERVATION_OBJCECT_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case UPDATE_RESERVATION_OBJCECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
