import { Actions } from "./newActions";

type State = {
  count: number;
  unit: string;
};

export const initialState: State = {
  count: 0,
  unit: "pt",
};

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "LONG_PREFIX_INCREMENT":
      return { ...state, count: state.count + 1 };
    case "LONG_PREFIX_DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LONG_PREFIX_SET_COUNT":
      return { ...state, count: action.payload.amount };
    default:
      throw new Error();
  }
}
