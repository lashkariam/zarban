import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import FilterControls from "./components/FilterControls";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { Task, FilterType } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Task[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const toggleCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>Zarban Task Manager</h1>
      <FilterControls
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TaskList toggleCompletion={toggleCompletion} tasks={tasks} filter={filter} searchTerm={searchTerm} />
    </div>
  );
};

export default App;