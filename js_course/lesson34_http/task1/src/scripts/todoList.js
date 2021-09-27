import { onCreateTask } from './createTask.js';
import { onDeleteTask } from './deleteData.js';
import { onToggleTask } from './updateTask.js';

const handleListClicks = (e) => {
  const isCheckBox = e.target.classList.contains('list__item-checkbox');

  if (isCheckBox) {
    onToggleTask(e);
    return;
  }

  const isDeleteBtn = e.target.classList.contains('list__item-delete_btn');

  if (isDeleteBtn) {
    onDeleteTask(e);
    return;
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClicks);
};
