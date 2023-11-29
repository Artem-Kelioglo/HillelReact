const ToDo = ({todo}) => {
  return (
    <div>{todo.id + '. ' + todo.title}</div>
  )
}

export default ToDo