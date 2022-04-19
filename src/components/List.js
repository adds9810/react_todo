const List = (props) => {
  const { id, txt, complete, onUpdate, onRemove } = props
  onUpdate()
  const delectTodo = () => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      window.localStorage.removeItem('LISTS')
      onRemove()
    }
  }
  return (
    <li>
      <label htmlFor={id}>
        <input type="checkbox" name={id} checked={complete} />
        {txt}
      </label>{' '}
      <a className="edit">수정하기</a>
      <a className="delect" onClick={delectTodo}>
        삭제하기
      </a>
    </li>
  )
}

export default List
