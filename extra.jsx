import { useState } from "react";
export default function App(){
  const [count,setCount] = useState(0)
  return(
    <>
    <button onClick={()=>{ setCount(count + 1)}}>increment</button>
    <button onClick={()=>{ setCount(count + -1)}}>decrement</button>
    <CountLabel count={count}/>
    </>
  )
}

function CountLabel({count}){
  const [prevCount,setPreCount] = useState(count)
  const [trend,setTrend] = useState(null)

  if(prevCount !== count){
    setPreCount(count)
    setTrend(prevCount < count ? 'increasing' : 'decreasing')
  }
  return(
    <>
    <h1>{count}</h1>
    {trend && <p>{trend}</p>}
    </>
  )

}