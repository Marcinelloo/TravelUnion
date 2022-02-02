import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./redux/reducers/currencyReducer";
import { countryReducer } from "./redux/reducers/countryReducer";
import { cityReducer } from "./redux/reducers/cityReducer";
import {
  offerReducer,
  theBestReducer,
  ourChoiceReducer,
} from "./redux/reducers/offerReducers";

const initialState = {};

const reducer = combineReducers({
  currency: currencyReducer,
  country: countryReducer,
  city: cityReducer,
  offer: offerReducer,
  theBest: theBestReducer,
  ourChoice: ourChoiceReducer,
});
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
