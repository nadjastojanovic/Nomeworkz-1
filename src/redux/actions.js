import * as actionTypes from "./actionTypes";

export function test(val){
  dispatch({
    type: actionTypes.TEST,
    payload: val,
  });
};