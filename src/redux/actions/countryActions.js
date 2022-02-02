import axios from "axios";
import {
  COUNTRY_OBJCECT_FAIL,
  COUNTRY_OBJCECT_REQUEST,
  COUNTRY_OBJCECT_SUCCESS,
} from "../constants/countryConstants";

export const countryExist = (countryName) => async (dispatch) => {
  dispatch({
    type: COUNTRY_OBJCECT_REQUEST,
    payload: countryName,
  });

  try {
    const countryData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/country/get/${countryName}`
    );

    dispatch({ type: COUNTRY_OBJCECT_SUCCESS, payload: countryData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUNTRY_OBJCECT_FAIL, payload: message });
  }
};
