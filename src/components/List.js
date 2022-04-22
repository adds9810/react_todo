const List = (props) => {
  const { id, txt, complete, onUpdate, onRemove } = props
  const editTodo = () => {
    onUpdate()
  }
  const delectTodo = (num) => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      onRemove(num)
    }
  }
  const chkFun = (id, e) => {
    window.alert(e.target.checked)
    window.alert(id)
  }
  return (
    <li>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={complete}
          onChange={(e) => chkFun(id, e)}
        />
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
