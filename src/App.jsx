import { useState } from 'react';
import Show from "./components/Show.jsx";
import List from './components/List.jsx';
import Header from './components/Header.jsx';
export default function App () {
  const [show, setShow] = useState([])
  function handleSelect (state) {
    setShow(prevShow => {
      return [...prevShow, state]
    })
    console.log(show)
  }

  return (

    <main id = "container">
    <Header />
    <List onset = {handleSelect} />
    <ul className = "show-list">
    {show.map((item, index) => <Show  key={index} title = {item.title} content = {item.content} />)}
  </ul>
    </main>
  )
}


