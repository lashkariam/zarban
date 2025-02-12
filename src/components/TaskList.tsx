import React from "react";
import { Task, FilterType } from "../types";

interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  searchTerm: string;
  toggleCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filter,
  searchTerm,
  toggleCompletion,
}) => {
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <ul>
      {filteredTasks?.length ? (
        filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : "pending"}
          >
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{task.title}</h3>
                <div>{task.completed ? "✅" : "❌"}</div>
              </div>
              <button
                style={{ background: task.completed ? "red" : "green" }}
                onClick={() => toggleCompletion(task.id)}
              >
                {task.completed ? "Mark as Pending" : "Mark as Completed"}
              </button>
            </div>
          </li>
        ))
      ) : (
        <div style={{ height: "80vh" }}>there are no items to show</div>
      )}
    </ul>
  );
};

export default TaskList;
