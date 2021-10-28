import { useState } from 'react'
import { FaRegCalendarPlus } from 'react-icons/fa';

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className='placeholderColor'
                placeholder="what you want to do..."
            />
            <button><FaRegCalendarPlus size='1em' /></button>
        </form>
    )
}

export default ToDoForm;