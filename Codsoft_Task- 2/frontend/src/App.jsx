import { useState } from "react";
import TaskList from "./Components/TaskList";
import AddTaskForm from "./Components/AddTaskForm";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // add a new task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //  delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // update task text
  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    
    </div>
  );
}

export default App;
