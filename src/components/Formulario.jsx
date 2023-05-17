import { useState } from "react"
import Swal from 'sweetalert2'

export const Formulario = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: false
    })
    const [error, setError] = useState('')

    const { title, description, state, priority } = todo

    const handleOnChange = e => {
        const { name, type, checked, value } = e.target

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setError('')

        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                title: 'Campos obligatorios',
                html: 'Por favor llena todos los campos',
                icon: 'error',
                confirmButtonColor: '#0d6efd'
            })
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completado'
        })

        Swal.fire({
            title: "Todo agregado correctamente",
            position: 'center',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })

    }

    return (
        <form onSubmit={ handleOnSubmit }>
            <input
                type="text"
                placeholder="Ingrese todo"
                className="form-control mb-2"
                name="title"
                value={ title }
                onChange={ handleOnChange }
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                value={ description }
                onChange={ handleOnChange }
            />
            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="priority"
                    id="inputCheck"
                    checked={ priority }
                    onChange={ handleOnChange }
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className="form-select mb-2"
                name="state"
                value={ state }
                onChange={ handleOnChange }
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Agregar
            </button>
            {
                error !== '' && error
            }
        </form>
    )
}
