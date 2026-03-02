let tasks = [];
let currentId = 1;

/**
 * Get all tasks
 */
const getAllTasks = () => {
  return tasks;
};

/**
 * Create a new task
 */
const createTask = (title) => {
  const newTask = {
    id: currentId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);
  return newTask;
};

/**
 * Find task by ID
 */
const findTaskById = (id) => {
  return tasks.find(task => task.id === id);
};

/**
 * Update task
 */
const updateTask = (id, updates) => {
  const task = findTaskById(id);
  if (!task) return null;

  if (typeof updates.title === 'string') {
    task.title = updates.title.trim();
  }

  if (typeof updates.completed === 'boolean') {
    task.completed = updates.completed;
  }

  return task;
};

/**
 * Delete task
 */
const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

/**
 * Clear all tasks (used for testing)
 */
const clearTasks = () => {
  tasks = [];
  currentId = 1;
};

module.exports = {
  getAllTasks,
  createTask,
  findTaskById,
  updateTask,
  deleteTask,
  clearTasks
};