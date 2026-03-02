'use client';

import { useEffect, useState } from 'react';
import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask
} from './services/api';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default  function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchTasks(search, status);
      setTasks(data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [search, status]);

  const handleAdd = async (title: string) => {
    try {
      await createTask(title);
      loadTasks();
    } catch {
      setError('Failed to add task');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      setError('Failed to delete task');
    }
  };

  const handleToggle = async (id: number, completed: boolean) => {
    try {
      await updateTask(id, !completed);
      loadTasks();
    } catch {
      setError('Failed to update task');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Task Manager</h1>

        <FilterBar
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

        <TaskForm onAdd={handleAdd} />

        {error && <p className="error">{error}</p>}
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        )}
      </div>
    </div>
  );
}