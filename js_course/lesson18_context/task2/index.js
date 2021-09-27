// wallet - borrowing methods (заимствование)

const wallet = {
  transactions: [1, 5, 7, 3, 8],
  getMax() {
    return Math.max(...this.transactions);
    // opt with call(apply)
    // return Math.max(null, this.transactions)
  },
  getMin() {
    return Math.min(...this.transactions); 
    // opt with call(apply)
    // return Math.min(null, this.transactions)
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
