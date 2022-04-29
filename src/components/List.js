const List = (props) => {
  const { id, txt, num, complete, onUpdate, onRemove } = props
  const editTodo = () => {
    onUpdate()
  }
  const delectTodo = (num) => {
    const delectYN = window.confirm('정말로 삭제 하시겠습니까?')
    if (delectYN) {
      onRemove(num)
    }
  }
  const chkFun = (rowIndex, e) => {
    const updateVal = 'chk'
    const chk = e.target.checked
    onUpdate(updateVal, num, chk)
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
      <a className="delect" onClick={() => delectTodo(id)}>
        삭제하기
      </a>
    </li>
  )
}

export default List
