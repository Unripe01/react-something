import { useReducer } from "react"
import { reducer, initialState } from '../reducer/reducer'


const UseReducerSample : React.FC = ()=> {
  const [state,dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={()=> dispatch({type:'increment'})}>+</button>
      <button onClick={()=> dispatch({type:'decrement'})}>-</button>
    </>
  )
}


export default UseReducerSample
