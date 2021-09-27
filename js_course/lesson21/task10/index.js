function manageClasses() {
  const class1 = document.querySelector('.one');
  class1.classList.add('selected');
  const class2 = document.querySelector('.two');
  class2.classList.remove('selected');
  const class3 = document.querySelector('.three');
  class3.classList.toggle('three_done');
  const class4 = document.querySelector('.four');
  class4.classList.replace('some-class', 'another-class');
}

manageClasses();
