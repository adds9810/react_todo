import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import Lists from './components/Lists'

const App = () => {
  const [lists, setLists] = useState(() => {
    return JSON.parse(window.localStorage.getItem('LISTS') || '[]')
  })

  const [checkAllVal, setCheckAll] = useState(false)

  useEffect(() => {
    chkAllAction()
    window.localStorage.setItem('LISTS', JSON.stringify(lists))
  }, [lists])

  const handleAddList = (list) => {
    setLists([...lists, list])
  }

  const handleChange = (value) => {
    //console.log(value)
    setCheckAll(value)
  }
  // todo: redux 변경해볼것.
  const handleUpdate = (cate, rowIndex, value) => {
    let editId
    let editTxt
    let editComplete

    if (cate === 'chk') {
      if (rowIndex === 'all') {
        const newList = lists.map((list) => {
          list.complete = value
        })
        setCheckAll(value)
      } else if (editComplete !== value) {
        const editRowData = {
          id: lists[rowIndex]['id'],
          txt: lists[rowIndex]['txt'],
          complete: value,
        }

        lists.splice(rowIndex, 1, editRowData)
      }

      setLists([...lists])
    } else {
      //editComplete = lists[id]['complete']
    }
  }
  const chkAllAction = () => {
    let changeChkAll = false
    let listLength = lists.length || 0

    if (listLength > 0) {
      for (let row = 0; row < listLength; row++) {
        if (lists[row]['complete'] !== true) {
          changeChkAll = false
          break
        }
        changeChkAll = true
      }
    }

    handleChange(changeChkAll)
  }
  const handleRemove = (id) => {
    let changeArr = []
    if (id !== 'all') {
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

// 불변 : immutable => 상태값, 동기성. checkbox, allCheckbox
// redux, recoil
// 가변
