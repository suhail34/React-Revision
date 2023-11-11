import * as actionType from '../actions/ActionType';

const reducer = (state=[], action) => {
  switch(action.type) {
    case actionType.GET_TODOS:
      return [...action.payload.todos];
    case actionType.CLEAR_TODOS:
      return [];
    default:
      return state;
  }
}

export default reducer;
