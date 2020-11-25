import * as actionTypes from "./actionTypes";

function reducer(state, action)
{
	console.log(action);
	switch (action.type) {
	    case actionTypes.TEST:
	      return { ...state, test: action.payload };
	    default:
	      return state;
  }
};

export default reducer;