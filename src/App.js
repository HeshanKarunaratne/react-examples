import './App.css';
import { useState } from 'react'
function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (newTask.length !== 0) {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        complete: false
      }
      setTodoList([...todoList, task]);
    }
  }

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  }

  const completeTask = (taskId) => {
    setTodoList(todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, complete: true };
      } else
        return task;
    }));
  }


  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (<div style={{ color: task.complete ? "green" : "black" }} key={task.id}>
            <h1 >{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => completeTask(task.id)}>Complete</button>
          </div>)
        })}
      </div>
    </div >
  );
}

export default App;
