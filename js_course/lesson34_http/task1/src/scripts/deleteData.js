import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = (e) => {
  const isCheckOnDel = document.querySelector('list__item-delete_btn');

  if (!isCheckOnDel) {
    return;
  }

  const taskId = e.taget.closest('list__item-checkbox').dataset.id;
  console.log(taskId);

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((updatedTasksList) => setItem('tasksList', updatedTasksList));
  renderTasks();
};
