import axios from "axios";
import {
  OPINIONS_BY_OFFER_OBJCECT_FAIL,
  OPINIONS_BY_OFFER_OBJCECT_REQUEST,
  OPINIONS_BY_OFFER_OBJCECT_SUCCESS,
  OPINIONS_BY_USER_OBJCECT_FAIL,
  OPINIONS_BY_USER_OBJCECT_REQUEST,
  OPINIONS_BY_USER_OBJCECT_SUCCESS,
  DELETE_BY_USER_OBJCECT_REQUEST,
  DELETE_BY_USER_OBJCECT_SUCCESS,
  DELETE_BY_USER_OBJCECT_FAIL,
  UPGRADE_BY_USER_OBJCECT_REQUEST,
  UPGRADE_BY_USER_OBJCECT_SUCCESS,
  UPGRADE_BY_USER_OBJCECT_FAIL,
  CREATE_OPINION_BY_USER_OBJCECT_REQUEST,
  CREATE_OPINION_BY_USER_OBJCECT_SUCCESS,
  CREATE_OPINION_BY_USER_OBJCECT_FAIL,
  OPINION_ID_OBJCECT_REQUEST,
  OPINION_ID_OBJCECT_SUCCESS,
  OPINION_ID_OBJCECT_FAIL,
} from "../constants/opinionConstant";

export const opinionByID = (id) => async (dispatch) => {
  dispatch({ type: OPINION_ID_OBJCECT_REQUEST, payload: { id } });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_LINK}/opinion/get/${id}`
    );

    dispatch({ type: OPINION_ID_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OPINION_ID_OBJCECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createOpinion =
  (userID, offerID, name, rate, description) => async (dispatch) => {
    dispatch({
      type: CREATE_OPINION_BY_USER_OBJCECT_REQUEST,
      payload: { userID, offerID, name, rate, description },
    });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_LINK}/opinion/createNew`,
        {
          userID,
          offerID,
          name,
          rate,
          description,
        }
      );
      dispatch({ type: CREATE_OPINION_BY_USER_OBJCECT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_OPINION_BY_USER_OBJCECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

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

export const deleteOpinionByUser = (opinionId) => async (dispatch) => {
  dispatch({ type: DELETE_BY_USER_OBJCECT_REQUEST, payload: { opinionId } });
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_SERVER_LINK}/opinion/delete/${opinionId}`
    );
    dispatch({ type: DELETE_BY_USER_OBJCECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_BY_USER_OBJCECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const upgradeOpinionByUser =
  (opinionId, name, rate, description) => async (dispatch) => {
    dispatch({
      type: UPGRADE_BY_USER_OBJCECT_REQUEST,
      payload: { opinionId, name, rate, description },
    });
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_SERVER_LINK}/opinion/update/${opinionId}`,
        {
          name,
          rate,
          description,
        }
      );
      dispatch({ type: UPGRADE_BY_USER_OBJCECT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPGRADE_BY_USER_OBJCECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
