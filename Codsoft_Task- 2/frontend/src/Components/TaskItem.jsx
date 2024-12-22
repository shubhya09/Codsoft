import { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // Save updated task
  const handleUpdate = () => {
    if (editedText.trim() !== "") {
      updateTask(task.id, editedText);
      setIsEditing(false); // Exit edit mode
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        // Edit Mode: Show input and save button
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleUpdate} className="save-button">
            Save
          </button>
        </>
      ) : (
        // View Mode: Show task text
        <>
          <span
            onClick={() => toggleTask(task.id)}
            className="task-text"
            title="Click to mark complete/incomplete"
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit
          </button>
        </>
      )}

      {/* Delete Button */}
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
