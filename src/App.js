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
  const listLeng = lists.length
  const handleAddList = (list) => {
    const newLists = [...lists, list]
    setLists(newLists)
  }
  const handleUpdate = (cate, id, num, value) => {
    let editId
    let editTxt
    let editComplete
    let editList
    if (cate == 'chk' && editComplete != value) {
      editId = id
      editTxt = lists[num]['txt']
      editComplete = value
      console.log('true')
      lists.splice(num, 1, {
        id: editId,
        txt: editTxt,
        complete: editComplete,
      })
      editList = [...lists]
      setLists(editList)
    } else {
      //editComplete = lists[id]['complete']
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
    <div>
      <div className="container">
        <h1>todo list</h1>
        <Form listLeng={listLeng} onAddList={handleAddList} />
        <Lists lists={lists} onUpdate={handleUpdate} onRemove={handleRemove} />
      </div>
    </div>
  )
}

export default App
