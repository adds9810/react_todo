import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import Lists from './components/Lists'

const App = () => {
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
  const handleUpdate = (cate, id, value) => {
    if (cate == 'chk') {
      console.log(lists)
      if (lists[id]['complete'] == value) {
        window.alert(id, value)
      }
    }
  }
  const handleRemove = (id) => {
    let changeArr
    if (id == 'all') {
      changeArr = []
    } else {
      changeArr = lists.filter((list) => list.id !== id)
    }
    setLists(changeArr)
    //window.location.reload()
  }
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
