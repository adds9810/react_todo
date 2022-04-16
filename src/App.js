import {useEffect, useState}from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import List from './components/List'
//import Lists from './components/Lists'

function App() {
  const [lists, setLists] = useState(() => {
    return JSON.parse(window.localStorage.getItem('LISTS')||'[]')
  })
  useEffect(() =>{
    window.localStorage.setItem('LISTS',JSON.stringify(lists))
  },[lists])
  const handleAddList = (list) =>{
    const newLists = [...lists,list]
    setLists(newLists)

  }
  return (
    <div id="root">
      <div className="container">
        <h1>todo list</h1>
        <Form onAddBanner={handleAddList} />
        <List lists={lists}/>
      </div>
    </div>
  )
}

export default App
