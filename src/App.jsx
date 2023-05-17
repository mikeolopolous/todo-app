import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Todos } from "./components/Todos"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

export const App = () => {

    const [todos, setTodos] = useState(initialStateTodos)

    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        const newArrayTodos = todos.filter( todo => todo.id !== id)
        setTodos(newArrayTodos)
    }

    const updateTodo = id => {
        const newArrayTodos = todos.map( todo => {
            if (todo.id === id) {
                todo.state = !todo.state
            }
            return todo
        })
        setTodos(newArrayTodos)
    }

    const orderTodos = arrayTodos => {
        return arrayTodos.sort( (a, b) => {
            if (a.priority === b.priority) return 0
            if (a.priority) return -1
            if (!a.priority) return 1
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className="container mb-2">
            <h1 className="my-5">Todo App</h1>
            <Formulario addTodo={ addTodo }/>
            <Todos
                todos={ orderTodos(todos) }
                deleteTodo={ deleteTodo}
                updateTodo={ updateTodo }
            />
        </div>
    )
}