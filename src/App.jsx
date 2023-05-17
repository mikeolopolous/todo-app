import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Todos } from "./components/Todos"

const initialStateTodos = [
    {
        id: 1,
        title: 'Todo #01',
        description: 'Descripcion #01',
        state: true,
        priority: true,
    },
    {
        id: 2,
        title: 'Todo #02',
        description: 'Descripcion #02',
        state: false,
        priority: false,
    },
    {
        id: 3,
        title: 'Todo #03',
        description: 'Descripcion #03',
        state: false,
        priority: true,
    },
]

export const App = () => {

    const [todos, setTodos] = useState(initialStateTodos)

    return (
        <div className="container mb-2">
            <h1 className="my-5">Todo App</h1>
            <Formulario />
            <Todos todos={ todos }/>
        </div>
    )
}