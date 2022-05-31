import ActionTypes from "./actionTypes";
import { CreatorsToActions } from "./creatorsToActions";
import * as creators from "./actionCreators";

type State = {
  count: number;
  unit: string;
};
type Actions = CreatorsToActions<typeof creators>;

function initialState(injects?: Partial<State>): State {
  return {
    count: 0,
    unit: "pt",
    ...injects,
  };
}

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionTypes.SET_COUNT:
      return { ...state, count: action.payload.amount };
    default:
      throw new Error();
  }
}

export { reducer, initialState };
