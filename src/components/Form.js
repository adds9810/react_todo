import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Form = (props) => {
  const [formValues, setformValues] = useState({
    txt: '',
    complete: false,
  })
  const handleInputChange = (event) => {
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = () => {
    if (formValues.txt === '') {
      window.alert('할 일을 등록해주세요!')
      return
    }
    props.onAddList({
      id: Date.now(),
      ...formValues,
    })
  }
  return (
    <div>
      <input
        type="text"
        name="txt"
        placeholder="할일을 적어주세요!"
        value={formValues.txt}
        onChange={handleInputChange}
        id="todoTxt"
      />
      <Button type="button" variant="primary" onClick={handleSubmit}>
        등록
      </Button>
    </div>
  )
}
export default Form
