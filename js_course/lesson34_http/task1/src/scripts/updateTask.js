import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

export const onToggleTask = (e) => {
  const tasksList = getItem('tasksList');
  const taskId = e.target.closest('.list__item').dataset.id;

  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
