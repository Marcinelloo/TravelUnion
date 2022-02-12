import axios from "axios";
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
} from "../constants/reservationConstant";

export const addReservation =
  (userID, offerID, dateFrom) => async (dispatch) => {
    dispatch({
      type: ADD_RESERVATION_OBJCECT_REQUEST,
    });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_LINK}/reservation/createNew`,
        {
          offerID,
          userID,
          dateFrom,
        }
      );

      dispatch({ type: ADD_RESERVATION_OBJCECT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ADD_RESERVATION_OBJCECT_FAIL, payload: message });
    }
  };

export const deleteReservation = (reservationId) => async (dispatch) => {
  dispatch({
    type: DELETE_RESERVATION_OBJCECT_REQUEST,
  });

  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_SERVER_LINK}/reservation/delete/${reservationId}`
    );

    dispatch({ type: DELETE_RESERVATION_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_RESERVATION_OBJCECT_FAIL, payload: message });
  }
};

export const getByUserReservation = (reservationId) => async (dispatch) => {
  dispatch({
    type: GET_USER_RESERVATION_OBJCECT_REQUEST,
  });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_LINK}/reservation/get/user`,
      {
        reservationId,
      }
    );

    dispatch({ type: GET_USER_RESERVATION_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_USER_RESERVATION_OBJCECT_FAIL, payload: message });
  }
};

export const payForReservation = (reservationId) => async (dispatch) => {
  dispatch({ type: UPDATE_RESERVATION_OBJCECT_REQUEST });
  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_SERVER_LINK}/reservation/update/${reservationId}`,
      {
        payed: "true"
      }
    );
    dispatch({ type: UPDATE_RESERVATION_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_RESERVATION_OBJCECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};