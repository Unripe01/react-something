import { decrement, increment, setCount } from "./actionCreators";

type IncrementAction = ReturnType<typeof increment>
type DecrementAction = ReturnType<typeof decrement>
type SetCountAction = ReturnType<typeof setCount>

export type Actions = IncrementAction | DecrementAction | SetCountAction;
