import { useEffect, useState } from "react"

const UseEffectSample:React.FC = ()=>{
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count+1)
    },1000)
    // クリーンアップ関数いるよ（毎回レンダリングして、stateに1足して、クリーンアップする感じ）
    return ()=> {
      clearInterval(interval)
    }
  })

  return (
    <div>{count}</div>
  )
}

export default UseEffectSample