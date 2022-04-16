import Lists from './Lists'
import Button from 'react-bootstrap/Button'

const List = (props) => {
  const {list} = props
  return (
    <div>
      <div className="list">
        {list.map((lists) => {
          return(
            <Lists 
              key={lists.id}

            />
          )
        })}
      </div>
      <div className="list_option">
        <label><input type="checkbox"/>전체선택</label>
        <Button type="button" variant="secondary">
          전체삭제
        </Button>
      </div>
    </div>
  )
}
export default List
