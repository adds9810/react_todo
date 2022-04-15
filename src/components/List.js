import Lists from './Lists'
import Button from 'react-bootstrap/Button'

const List = (props) => {
  const {Lists} = props
  return (
    <div>
      <Lists/>
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
