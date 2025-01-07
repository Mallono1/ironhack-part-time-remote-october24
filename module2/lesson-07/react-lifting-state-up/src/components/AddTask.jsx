import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTask({ tasks, setTasks}){
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();// stop the form from refreshing the page

        // 1. create a new task object 
        const newTask = {
            _id: uuidv4(),
            name: taskName,
            description: taskDescription,
            isDone: false,
        }
        console.log('newTask', newTask)
        // 2. add that object to the list of existing tasks
        const tasksCopy = [...tasks, newTask]
        setTasks(tasksCopy)
        setTaskName("")
        setTaskDescription("")
    }
    return <form onSubmit={handleSubmit}>
            <input name="taskName" type="text" placeholder="Add Task Name..." value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
            <input name="taskDescription" type="text" placeholder="Add Task description..." value={taskDescription} onChange={(e)=> setTaskDescription(e.target.value)}/>
            <button>Create Task</button>
            </form>
}

export default AddTask;