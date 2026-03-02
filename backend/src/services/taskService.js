const taskModel = require('../models/taskModel');

const getTasks = (search, status) => {
    
  let tasks = taskModel.getAllTasks();

  if (search) {
    tasks = tasks.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status) {
    const isCompleted = status === 'completed';
    tasks = tasks.filter(task => task.completed === isCompleted);
  }

  return tasks;
};

module.exports = { getTasks };