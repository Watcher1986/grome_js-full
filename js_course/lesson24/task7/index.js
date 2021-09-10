const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, date: new Date() },
  { text: 'Pick up Tom from airport', done: false, date: new Date() },
  { text: 'Visit party', done: false, date: new Date() },
  { text: 'Visit doctor', done: true, date: new Date() },
  { text: 'Buy meat', done: true, date: new Date() },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

function updateTaskHandler(event) {
  const isChecked = event.target.classList.contains('list__item-checkbox');
  if (!isChecked) {
    return;
  }
  tasks[event.target.dataset.id].done = event.target.checked;
  renderTasks(tasks);
}

listElem.addEventListener('click', updateTaskHandler);

const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

function createTaskHandler() {
  const { value } = inputElem;

  if (!value) {
    return;
  }

  tasks.push({
    text: value,
    done: false,
    date: new Date(),
  });
  tasks.sort((a, b) => b.date - a.date);
  inputElem.value = '';
  renderTasks(tasks);
}

createBtnElem.addEventListener('click', createTaskHandler);
