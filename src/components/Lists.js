import List from './List'
import Button from 'react-bootstrap/Button'

const Lists = (props) => {
  const { lists, onUpdate, onRemove } = props

  onUpdate()
  const delectAllTodo = () => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      window.localStorage.removeItem('LISTS')
      onRemove()
    }
  }
  return (
    <div>
      <ul className="list">
        {lists.map((list) => {
          return (
            <List
              key={list.id}
              txt={list.txt}
              complete={list.complete}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          )
        })}
      </ul>
      <div className="list_option">
        <label>
          <input type="checkbox" />
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
