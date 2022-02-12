import axios from "axios";
import {
  OPINIONS_BY_OFFER_OBJCECT_FAIL,
  OPINIONS_BY_OFFER_OBJCECT_REQUEST,
  OPINIONS_BY_OFFER_OBJCECT_SUCCESS,
  OPINIONS_BY_USER_OBJCECT_FAIL,
  OPINIONS_BY_USER_OBJCECT_REQUEST,
  OPINIONS_BY_USER_OBJCECT_SUCCESS,
} from "../constants/opinionConstant";
import {} from "../constants/opinionConstant";

export const opinionByOffer = (offerId) => async (dispatch) => {
  dispatch({ type: OPINIONS_BY_OFFER_OBJCECT_REQUEST, payload: { offerId } });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_LINK}/opinion/offerOpinion`,
      { offerId }
    );

    dispatch({ type: OPINIONS_BY_OFFER_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OPINIONS_BY_OFFER_OBJCECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const opinionByUser = (userId) => async (dispatch) => {
  dispatch({ type: OPINIONS_BY_USER_OBJCECT_REQUEST, payload: { userId } });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_LINK}/opinion/myOpinions`,
      {
        userId,
      }
    );
    dispatch({ type: OPINIONS_BY_USER_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OPINIONS_BY_USER_OBJCECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


