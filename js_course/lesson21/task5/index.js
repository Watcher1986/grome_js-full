export function getTitle() {
  const titleText = document.querySelector('.title');
  return titleText.textContent;
}

export function getDescription() {
  const descText = document.querySelector('.about');
  return descText.innerText;
}

export function getPlans() {
  const plansText = document.querySelector('.plans');
  return plansText.innerHTML;
}

export function getGoal() {
  const goalText = document.querySelector('.goal');
  return goalText.outerHTML;
}
