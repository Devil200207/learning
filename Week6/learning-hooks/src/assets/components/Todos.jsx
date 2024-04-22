export function Todos(props) {
  return (
    <div>
      {props.Todo.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}
