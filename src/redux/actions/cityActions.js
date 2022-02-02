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

    
    dispatch({ type: CITY_OBJCECT_SUCCESS, payload: cityData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_OBJCECT_FAIL, payload: message });
  }
};
