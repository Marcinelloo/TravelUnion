import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./redux/reducers/currencyReducer";
import {
  countryByNameReducer,
  countryReducer,
} from "./redux/reducers/countryReducer";
import { cityReducer } from "./redux/reducers/cityReducer";
import {
  offerReducer,
  theBestReducer,
  ourChoiceReducer,
  offerByIdReducer,
} from "./redux/reducers/offerReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./redux/reducers/userReducer";
import {
  opinionByOfferReducer,
  opinionByUserReducer,
} from "./redux/reducers/opinionReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  currency: currencyReducer,
  country: countryReducer,
  city: cityReducer,
  offer: offerReducer,
  theBest: theBestReducer,
  ourChoice: ourChoiceReducer,
  offerById: offerByIdReducer,
  countryByName: countryByNameReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  offerOpinions: opinionByOfferReducer,
  userOpinions: opinionByUserReducer,
});
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
