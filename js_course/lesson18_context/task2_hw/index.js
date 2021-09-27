// put your code here
const wallet = {
  transactions: [12, 87, 34, 15, 77],
  getMax() {
    return Math.max(...this.transactions);
    // option with call(apply)
    // return Math.max.call(null, this.transactions)
  },
  getMin() {
    return Math.min(...this.transactions);
    // option with call(apply)
    // return Math.min.apply(null, [this.transactions])
  },
};

console.log(wallet.getMax());

console.log(wallet.getMin());
