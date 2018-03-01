import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const devEnv = process.env.ENVIRONMENT === "dev";
  const composeEnhancers = devEnv && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  const middleWare = devEnv ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk);
  return createStore(
    rootReducer,
    initialState,
    middleWare
  );
}
