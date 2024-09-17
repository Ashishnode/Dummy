import React, {useState} from "react";


function App(){
  const[data,setData]=useState(0)

const minus=()=>{data>0?setData(data-1):setData(data)}
  return<>
  <button onClick={()=>minus()}>-</button>
  {data}
  <button onClick={()=>setData(data+1)}>+</button>

  </>
}

export default App 
