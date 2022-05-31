import { useCallback, useMemo, useReducer } from "react"
import { decrement, increment } from "../reducer/actionCreators"
import { initialState, reducer } from "../reducer/reducer"


type Props = {
  countLabel: string
  onClickIncrement: () => void
  onClickDecrement: () => void
}

const Component:React.FC<Props> = props => (
  <div>
    Count: {props.countLabel}
    <button onClick={props.onClickIncrement}>+</button>
    <button onClick={props.onClickDecrement}>-</button>
  </div>
)

const useReducerSample : React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ count:0}))
  const countLabel = useMemo(()=> `${state.count} ${state.unit}`, [state])
  const onClickIncrement = useCallback(()=> dispatch(increment()),[])
  const onClickDecrement = useCallback(()=> dispatch(decrement()),[])
  return (
    <Component
      countLabel={countLabel}
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
    ></Component>
  )
}
export default useReducerSample