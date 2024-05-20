import { useState } from 'react'
import './App.css'

function tasklist() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = () => {
    setTasks(tasks.slice(1));
  };

  return (
    <div>
      <h1>Add Your Task </h1>
      <input type="text"value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTask}> Add Task</button>
      <button onClick={removeTask }> Remove Task</button>
      <ul> {tasks.map((task, index) => (<li key={index}>{task}</li>))}</ul>

    </div>
  );
}

export default tasklist;


