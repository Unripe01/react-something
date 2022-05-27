import { useCallback, useMemo, useState } from "react";



const UseMemoSample:React.FC = ()=> {
  const [count,setCount] = useState(0)
  const double = useMemo(()=>count*2,[count])
  const doubleWithInit = useMemo(()=>`${double} pt`,[double]) 
  const handleClick = useCallback(()=>{
    setCount(prev => prev +1)
  },[])

  return (
    <div>
      <p>count : {count}</p>
      <p>double : {double}</p>
      <p>doubleWithInit : {doubleWithInit}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default UseMemoSample