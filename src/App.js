import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import Lists from './components/Lists'

function App() {
  const [lists, setLists] = useState(() => {
    return JSON.parse(window.localStorage.getItem('LISTS') || '[]')
  })
  useEffect(() => {
    window.localStorage.setItem('LISTS', JSON.stringify(lists))
  }, [lists])
  const handleAddList = (list) => {
    const newLists = [...lists, list]
    setLists(newLists)
  }
  const handleUpdate = () => {}
  const handleRemove = () => {
    window.location.reload()
    console.log(JSON.parse(window.localStorage.getItem('LISTS') || '[]'))
  }
  console.log(JSON.parse(window.localStorage.getItem('LISTS') || '[]'))
  return (
    <div id="root">
      <div className="container">
        <h1>todo list</h1>
        <Form onAddList={handleAddList} />
        <Lists lists={lists} onUpdate={handleUpdate} onRemove={handleRemove} />
      </div>
    </div>
  )
}

export default App
