import { createStore } from "redux";
import reducer from "./reducer";

const state = {};

function configureStore()
{
  const store = createStore(
    reducer,
    state,
  );
  return store;
};

export default configureStore;