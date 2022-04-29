const List = (props) => {
  const { id, txt, num, complete, onUpdate, onRemove } = props
  const editTodo = () => {
    onUpdate()
  }
  const delectTodo = (rowIndex) => {
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      onRemove(rowIndex)
    }
  }
  const chkFun = (rowIndex, e) => {
    const updateVal = 'chk'
    const chk = e.target.checked
    onUpdate(updateVal, rowIndex, chk)
  }
  return (
    <li>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={id}
          id={id}
          data-num={num}
          checked={complete}
          onChange={(e) => chkFun(num, e)}
        />{' '}
        {num + 1}. {txt}
      </label>{' '}
      <a className="edit" onClick={() => editTodo(id)}>
        수정하기
      </a>{' '}
      <a className="delete" onClick={() => delectTodo(id)}>
        삭제하기
      </a>
    </li>
  )
}

export default List
