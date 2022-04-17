import List from './List'
import Button from 'react-bootstrap/Button'

const Lists = (props) => {
  const {lists} = props
  return (
    <div>
      <ul className="list">
        {lists.map((list) => {
          return(
            <List 
              key={list.id}
              txt={list.txt}
              complete={list.complete}
            />
          )
        })}
      </ul>
      <div className="list_option">
        <label><input type="checkbox"/>전체선택</label>
        <Button type="button" variant="secondary">
          전체삭제
        </Button>
      </div>
    </div>
  )
}
export default Lists
