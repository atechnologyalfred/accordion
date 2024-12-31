import { useState } from 'react';
export default function List ({onset}) {
    const [state, setState] = useState({
    title: "Add title",
    content: "maximum of 200 awords",
  })
  function handleChange (inputValue, inputItem) {
    setState(prevState => {
      return {
        ...prevState, 
        [inputValue]: inputItem
        
        
      }
    });
  }
  
  return (
    <div className = "list">
      
      <input type = "text"  placeholder='topic'  onChange={(event) => handleChange('title', event.target.value)} />
      <textarea placeholder='content'   rows = "6" onChange={(event) => handleChange('content', event.target.value)}   />
      <button onClick={() => onset(state)}>Add</button>
    </div>

  )
}


