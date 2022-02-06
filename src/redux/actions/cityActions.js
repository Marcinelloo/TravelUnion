import axios from "axios";
import {
  CITY_OBJCECT_FAIL,
  CITY_OBJCECT_REQUEST,
  CITY_OBJCECT_SUCCESS,
} from "../constants/cityConstants";

export const cityExist = (countryId) => async (dispatch) => {
  dispatch({
    type: CITY_OBJCECT_REQUEST,
    payload: countryId,
  });

  try {
    const cityData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/city/get/${countryId}`
    );

    if (cityData.data.length > 0) {
      dispatch({ type: CITY_OBJCECT_SUCCESS, payload: cityData.data });
    } else dispatch({ type: CITY_OBJCECT_SUCCESS, payload: "notExist" });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_OBJCECT_FAIL, payload: message });
  }
};
