// put your code here

function sumOfSquares() {
  return [...arguments].reduce((acc, num) => acc + num ** 2);
  // option with call(apply) :
  // return [].reduce.call(arguments, (acc, num) => acc + num ** 2)
}

console.log(sumOfSquares(1, 4, 2, 3, 7));
