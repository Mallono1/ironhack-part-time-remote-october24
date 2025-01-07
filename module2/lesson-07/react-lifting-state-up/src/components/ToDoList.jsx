import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
import AddTask from "./AddTask";

const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    isDone: false,
    description: "Do something important",
  },
  {
    _id: "2b",
    name: "Task2",
    isDone: false,
    description: "Do something important",
  },
  {
    _id: "3c",
    name: "Task3",
    isDone: false,
    description: "Do something important",
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    // 1. Change the isDone of the matching task to its opposite value
    // 2. Update tasksCompleted accordingly (Increase/decrease by 1)
    const tasksCopy = [...tasks];
    
    tasksCopy.forEach((task) => {
        // Find the selected task and update task's `isDone` property,
        if (task._id === id) {
        task.isDone = task.isDone ? false : true;
    
        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
        }
    
        setTasks(tasksCopy);
    }); 
  }

  return (
    <div>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Summary tasksCompleted={tasksCompleted} />
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} /> )}
      </div>
    </div>
  );
}

export default ToDoList;