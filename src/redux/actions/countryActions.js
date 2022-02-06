import axios from "axios";
import {
  COUNTRY_BY_ID_OBJCECT_FAIL,
  COUNTRY_BY_ID_OBJCECT_REQUEST,
  COUNTRY_BY_ID_OBJCECT_SUCCESS,
  COUNTRY_OBJCECT_FAIL,
  COUNTRY_OBJCECT_REQUEST,
  COUNTRY_OBJCECT_SUCCESS,
} from "../constants/countryConstants";

export const country = () => async (dispatch) => {
  dispatch({
    type: COUNTRY_OBJCECT_REQUEST,
  });

  try {
    const countryData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/country/get`
    );

    if (countryData.data.length > 0) {
      dispatch({ type: COUNTRY_OBJCECT_SUCCESS, payload: countryData.data });
    } else dispatch({ type: COUNTRY_OBJCECT_SUCCESS, payload: "notExist" });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUNTRY_OBJCECT_FAIL, payload: message });
  }
};

export const countryExist = (countryName) => async (dispatch) => {
  dispatch({
    type: COUNTRY_BY_ID_OBJCECT_REQUEST,
    payload: countryExist,
  });

  try {
    const countryData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/country/get/${countryName}`
    );

    if (countryData.data.length > 0) {
      dispatch({
        type: COUNTRY_BY_ID_OBJCECT_SUCCESS,
        payload: countryData.data,
      });
    } else
      dispatch({ type: COUNTRY_BY_ID_OBJCECT_SUCCESS, payload: "notExist" });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUNTRY_BY_ID_OBJCECT_FAIL, payload: message });
  }
};
