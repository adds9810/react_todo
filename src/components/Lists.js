const Lists = (props) =>{
  const {txt, complete} = props
    return (
      <div>
        <label checked={complete}>{txt}</label>
      </div>
    )
}

export default Lists