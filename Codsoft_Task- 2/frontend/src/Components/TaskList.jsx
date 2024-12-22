import  "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, updateTask }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
