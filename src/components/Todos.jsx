export const Todos = ({ todos }) => {

    const listTodos = todos.map( todo => <li key={todo.id}>{todo.title}</li>)

    return (
        <div className="mt-5">
            <h2 className="text-center">Todos</h2>
            <ul>{listTodos}</ul>
        </div>
    )
}