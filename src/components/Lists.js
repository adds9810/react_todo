import List from './List'
import Button from 'react-bootstrap/Button'

const Lists = (props) => {
  const { lists, onUpdate, onRemove } = props

  const checkAll = () => {
    onUpdate()
  }
  const delectAllTodo = () => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      onRemove('all')
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
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" onChange={checkAll} />
          전체선택
        </label>
        <Button type="button" variant="secondary" onClick={delectAllTodo}>
          전체삭제
        </Button>
      </div>
    </div>
  )
}
export default Lists
