import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

const state = {
	auth : 0
};

function configureStore()
{
  const store = createStore(
    reducer,
    state,
    compose(
      applyMiddleware(logger)
    )
  );
  return store;
};

export default configureStore;