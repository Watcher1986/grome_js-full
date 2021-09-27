// Wallet

class Wallet {
  #balance = 0;
  // constructor() {
  //   this._balance = 0;
  // }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }
    this.#balance -= amount;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());

wallet1.deposit(37);

console.log(wallet1.getBalance());

wallet1.withdraw(17);
console.log(wallet1.getBalance());
wallet1.withdraw(127);
console.log(wallet1.getBalance());
