const divElem = document.querySelector('.rect_div');

const pElem = document.querySelector('.rect_p');

const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'yellow');
const logGreenP = logTarget.bind(null, 'P', 'yellow');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'yellow');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true); // { capture: true }
divElem.addEventListener('click', logGreenDiv); // event () => { logGreenDiv ()};
pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

// const handler = () => {
//   console.log('div1');
// };
// elem.addEventListener('click', handler);

// elem.removeEventListener('click', handler);
