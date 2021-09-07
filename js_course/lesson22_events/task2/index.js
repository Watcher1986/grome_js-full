const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandBtn = document.querySelector('.remove-handlers-btn');
const attachHandBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logClear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

const stopEvents = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);

  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
};

const startEvents = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);

  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
};

clearBtn.addEventListener('click', logClear);

removeHandBtn.addEventListener('click', stopEvents);

attachHandBtn.addEventListener('click', startEvents);
