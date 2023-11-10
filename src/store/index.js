import * as actionType from '../actions/ActionType'
import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current State ', store.getState())
})

store.dispatch({
  type: actionType.INCREMENT
})

store.dispatch({
  type: actionType.DECREMENT
})

export default store;
