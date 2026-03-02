const taskModel = require('../models/taskModel');
const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
  try {
    const { search, status } = req.query;
   
    const tasks = await taskService.getTasks(search, status);
    
    res.json(tasks);
  } catch (err) {
    
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

const createTask = (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = taskModel.createTask(title);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

const updateTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = taskModel.updateTask(id, req.body);

    if (!updated) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

const deleteTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const removed = taskModel.deleteTask(id);

    if (!removed) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };