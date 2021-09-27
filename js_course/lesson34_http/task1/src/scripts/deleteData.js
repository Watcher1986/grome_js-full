import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = (e) => {
  const taskId = e.target.closest('.list__item').dataset.id;
  console.log(taskId);

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((updatedTasksList) => setItem('tasksList', updatedTasksList));
  renderTasks();
};
