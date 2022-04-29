import List from './List'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Lists = (props) => {
  const { lists, checkAllVal, setLists, onUpdate, onRemove } = props
  const [chkAllBox, setChkAllBox] = useState(false)

  const checkAll = (e) => {
    const updateVal = 'chk'
    const chk = e.target.checked
    const allNum = 'all'
    setChkAllBox(!chkAllBox)
    onUpdate(updateVal, allNum, chk)
  }
  const delectChoiceTodo = () => {
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      if (chkAllBox == true) {
        onRemove('all')
      } else {
        setLists(lists.filter((list) => list.complete !== true))
      }
    }
  }
  return (
    <div>
      <ul className="list">
        {lists.map((list, index) => {
          return (
            <List
              key={list.id}
              id={list.id}
              num={index}
              txt={list.txt}
              complete={list.complete}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          )
        })}
      </ul>
      <div className="list_option">
        <label htmlFor="chkAll">
          <input
            type="checkbox"
            name="chkAll"
            id="chkAll"
            checked={checkAllVal}
            onChange={(e) => checkAll(e)}
          />
          전체선택
        </label>
        <Button type="button" variant="secondary" onClick={delectChoiceTodo}>
          선택삭제
        </Button>
      </div>
    </div>
  )
}
export default Lists
