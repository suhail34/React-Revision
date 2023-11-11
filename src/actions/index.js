import * as actiontype from "./ActionType"

export const get_todos = (todos) => {
  return {
    type: actiontype.GET_TODOS,
    payload: {
      todos: todos
    }
  }
}

export const clear_todos = () => {
  return {
    type: actiontype.CLEAR_TODOS
  }
}
