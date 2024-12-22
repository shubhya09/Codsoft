import { useState } from "react";


const AddTaskForm = ({ addTask }) => {
    const [input, setInput] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim() !== "") {
        addTask(input); 
        setInput("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input className="task-input"
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button"  type="submit">Add</button>
      </form>
    );
  };
  
  export default AddTaskForm;
  
