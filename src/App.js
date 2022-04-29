import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import Lists from './components/Lists'

const App = () => {
  const [lists, setLists] = useState(() => {
    return JSON.parse(window.localStorage.getItem('LISTS') || '[]')
  })
  const [checkAllVal, setCheckAll] = useState({
    checked: '',
  })
  useEffect(() => {
    chkAllAction()
    window.localStorage.setItem('LISTS', JSON.stringify(lists))
  }, [lists])
  const handleAddList = (list) => {
    const newLists = [...lists, list]
    setLists(newLists)
  }
  const handleChange = (value) => {
    console.log(value)
    setCheckAll({ checked: value })
  }
  const handleUpdate = (cate, num, value) => {
    let editId
    let editTxt
    let editComplete
    let editList
    if (cate == 'chk') {
      if (num == 'all') {
        lists.map((list) => {
          list.complete = value
        })
        setCheckAll(value)
      } else if (editComplete != value) {
        editId = lists[num]['id']
        editTxt = lists[num]['txt']
        editComplete = value
        lists.splice(num, 1, {
          id: editId,
          txt: editTxt,
          complete: editComplete,
        })
      }
      editList = [...lists]
      setLists(editList)
    } else {
      //editComplete = lists[id]['complete']
    }
  }
  const chkAllAction = () => {
    let changeChkAll
    if (lists.length <= 0) {
      changeChkAll = ''
    } else {
      for (let i = 0; i < lists.length; i++) {
        if (lists[i]['complete'] != true) {
          changeChkAll = ''
          break
        }
        changeChkAll = 'checked'
      }
    }
    handleChange(changeChkAll)
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
        <Form onAddList={handleAddList} />
        <Lists
          lists={lists}
          checkAllVal={checkAllVal}
          setLists={setLists}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}

export default App
