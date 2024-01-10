import { useState } from 'react';

const ToDo = () => {
    const [tasks, setTasks] = useState(["Task-1", "Task-2", "Task-3"]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = event => {
        const { value } = event.target;
        setInputValue(value);
    }

    const handleSubmit = () => {
        console.log(x(1, 2, 3));
        setTasks([...tasks, inputValue]);
        setInputValue("");
    }

    const deleteByIndex = (i) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(i, 1);
        setTasks(updatedTasks);
    }

    function x(...arg) {
        return arg;
    }

    return (
        <div>
            <h1>ToDo Component</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add Task"
                    onChange={handleChange}
                    value={inputValue}
                />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div className="tasks_wrapper">
                {
                        tasks.map((item, index) => {
                            return <div key={index}>
                                <p>{item}</p>
                                <button  onClick={() => deleteByIndex(index)}>Delete</button>
                            </div>
                            }
                        )
                }
            </div>
        </div>
    )
}

export default ToDo;
