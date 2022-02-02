import axios from "axios";
import {
  CURRENCY_OBJCECT_FAIL,
  CURRENCY_OBJCECT_REQUEST,
  CURRENCY_OBJCECT_SUCCESS,
} from "../constants/currencyConstants";

export const currency = () => async (dispatch) => {
  dispatch({
    type: CURRENCY_OBJCECT_REQUEST,
  });

  try {
    const currencyData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/currency/get`
    );

    dispatch({ type: CURRENCY_OBJCECT_SUCCESS, payload: currencyData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CURRENCY_OBJCECT_FAIL, payload: message });
  }
};
