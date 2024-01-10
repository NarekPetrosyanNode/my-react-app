import { useState } from "react";

export default function AddNewTask(props) {
    const [tasks, setTasks] = useState(["Task-1", "Task-2", "Task-3"]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setInputValue(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTasks = [...tasks, inputValue];
        setTasks(newTasks);
        setInputValue("");
    }

    return (
        <div>
                <input
                    type="text"
                    placeholder="Add Task"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add Task</button>
            <div className="tasks_wrapper">
                {tasks.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        </div>
    )
}
