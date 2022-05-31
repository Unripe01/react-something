type IncrementAction = {
  type: "INCREMENT";
};

type DecrementAction = {
  type: "DECREMENT";
};

type SetCountAction = {
  type: "SET_COUNT";
  payload: { amount: number };
};

export type Actions = IncrementAction | DecrementAction | SetCountAction;
