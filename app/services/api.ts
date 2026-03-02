const BASE_URL = 'http://localhost:5000/tasks';

export const fetchTasks = async (search = '', status = '') => {
  const params = new URLSearchParams();

  if (search) params.append('search', search);
  if (status) params.append('status', status);

  const response = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch tasks');

  return response.json();
};

export const createTask = async (title: string) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) throw new Error('Failed to delete task');
};

export const updateTask = async (id: number, completed: boolean) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });

  if (!response.ok) throw new Error('Failed to update task');
};