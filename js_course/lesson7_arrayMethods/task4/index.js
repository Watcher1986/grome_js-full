// ['Ann', 'Tom', 'Bob', 'Kate'] ['Tom', 'Bob'] => ['Good job, Ann', 'Good job, Kate']

// const getMessForPassStud = (allStud, failedStud) => {
//   const passedStud = allStud.filter((name) => !failedStud.includes(name));
//   const message = passedStud.map(name => 'Good job, ' + name)
//   return message;
// };

const getMessForPassStud = (allStud, failedStud) =>
  allStud
    .filter((name) => !failedStud.includes(name))
    .map((name) => 'Good Job, ' + name);

const allStud = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStud = ['Tom', 'Bob'];

console.log(getMessForPassStud(allStud, failedStud));
