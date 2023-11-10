import * as actiontype from "./ActionType"

const increment = () => {
  type: actiontype.INCREMENT;
}

const decrement = () => {
  type: actiontype.DECREMENT;
}
