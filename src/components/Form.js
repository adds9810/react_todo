import Button from 'react-bootstrap/Button'
const Form = () => {
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="할일을 적어주세요!"
            aria-label="할일을 적어주세요!"
            aria-describedby="button-addon2"
            id="todoTxt"
          />
          <Button type="button" variant="primary">
            등록
          </Button>

          <Button type="button" variant="secondary">
            전체삭제
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Form
