import * as actionTypes from "./actionTypes";

function reducer(state, action)
{
	switch (action.type) {
	    case actionTypes.AUTH:
	      return { ...state, auth: action.payload };
	    default:
	      return state;
  }
};

export default reducer;