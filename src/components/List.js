const List = (props) =>{
  const {key, txt, complete} = props
    return (
        <li><label htmlFor={key} ><input type="checkbox"checked={complete}/> {txt}</label> <a className="edit">수정하기</a> <a className="delect">삭제하기</a></li>
    )
}

export default List