class BankAccount {
  public accountHolder: string;

  private balance: number;

  protected accountNumber: string;

  constructor(holder: string, balance: number, accountNum: string) {
    this.accountHolder = holder;
    this.balance = balance;
    this.accountNumber = accountNum;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} and balance is ${this.balance}`);

  }
}

let account = new BankAccount("Unish", 1200, "ACC123");

console.log(account.accountHolder);
console.log(account.getBalance());
