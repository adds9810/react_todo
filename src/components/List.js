const List = (props) => {
  const { id, txt, complete, onUpdate, onRemove } = props
  const editTodo = () => {
    window.alert()
    onUpdate()
  }
  const delectTodo = (num) => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      onRemove(num)
    }
  }
  return (
    <li>
      <label htmlFor={id}>
        <input type="checkbox" name={id} checked={complete} />
        {txt}
      </label>{' '}
      <a className="edit" onClick={() => editTodo(id)}>
        수정하기
      </a>
      <a className="delect" onClick={() => delectTodo(id)}>
        삭제하기
      </a>
    </li>
  )
}

export default List
