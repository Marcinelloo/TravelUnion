import axios from "axios";
import {
  OFFER_OBJCECT_FAIL,
  OFFER_OBJCECT_REQUEST,
  OFFER_OBJCECT_SUCCESS,
  OFFEROURCHOICE_OBJCECT_FAIL,
  OFFEROURCHOICE_OBJCECT_REQUEST,
  OFFEROURCHOICE_OBJCECT_SUCCESS,
  OFFERTHEBEST_OBJCECT_FAIL,
  OFFERTHEBEST_OBJCECT_REQUEST,
  OFFERTHEBEST_OBJCECT_SUCCESS,
} from "../constants/offerConstants";

export const offer = (countryId) => async (dispatch) => {
  dispatch({
    type: OFFER_OBJCECT_REQUEST,
  });

  try {
    const offerData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/offer/get/byCountry/${countryId}`
    );

    dispatch({ type: OFFER_OBJCECT_SUCCESS, payload: offerData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: OFFER_OBJCECT_FAIL, payload: message });
  }
};

export const ourChoice = () => async (dispatch) => {
  dispatch({
    type: OFFEROURCHOICE_OBJCECT_REQUEST,
  });

  try {
    const offerData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/offer/getOurChoice`
    );

    dispatch({ type: OFFEROURCHOICE_OBJCECT_SUCCESS, payload: offerData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: OFFEROURCHOICE_OBJCECT_FAIL, payload: message });
  }
};

export const theBest = () => async (dispatch) => {
  dispatch({
    type: OFFERTHEBEST_OBJCECT_REQUEST,
  });

  try {
    const offerData = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/offer/getTheBest`
    );

    dispatch({ type: OFFERTHEBEST_OBJCECT_SUCCESS, payload: offerData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: OFFERTHEBEST_OBJCECT_FAIL, payload: message });
  }
};
