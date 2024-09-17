import React, { useState } from "react";

function App(){
  const [selected,setSelected] = useState(null)

  const lists =['Bag','shoes','umberalla','bottle']
  return<>
  {lists.length>1? 
               (lists.map((list ,index)=><ul key={index} onClick={()=>setSelected(list)}>{list}</ul>))
               :(<h1>Empty Server Not responding</h1>)
    
  }
  <h3>Selected items {selected}</h3>
  </>
}

export default App