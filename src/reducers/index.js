import * as actionType from '../actions/ActionType';

const reducer = (state=0, action) => {
  switch(action.type) {
    case actionType.INCREMENT:
      return state+1;
    case actionType.DECREMENT:
      return state-1;
    default:
      return state;
  }
}

export default reducer;
