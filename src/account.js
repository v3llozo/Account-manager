const defaultAccount = [
    { id: "100", balance: 0 },
    { id: "300", balance: 0 },
];
accounts = defaultAccount;
const Account = {
    reset() {
        accounts = defaultAccount;
        return "OK";
    },
    getAccount(id, createNew) {
        let account = accounts.find((account) => account.id === id);
        if (account) {
            return account;
        } else {
            if (createNew) {
                let newAccount = { id: id, balance: 0 };
                accounts.push(newAccount);
                return newAccount;
            } else {
                return 0;
            }
        }
    },

    getBalance(id) {
        let accountId = this.getAccount(id);
        if (!accountId) {
            return undefined;
        } else {
            return accounts.find((account) => {
                if (account.id === accountId.id) {
                    return account;
                }
            });
        }
    },

    deposit(id, value) {
        let accountId = this.getAccount(id, true);
        let res = {};
        res = accounts.find((account) => {
            if (account.id === accountId.id) {
                account.balance += value;
                return account;
            }
        });
        return res;
    },

    withdraw(id, value) {
        let accountId = this.getAccount(id, false);
        if (!accountId) {
            return 0;
        }
        let res = {};
        res = accounts.find((account) => {
            if (account.id === accountId.id) {
                account.balance -= value;
                return account;
            }
        });
        return res;
    },
    transfer(origin, destination, amount) {
        let accountOrigin = this.getAccount(origin, false);
        let accountDestination = this.getAccount(destination, false);
        if (!accountOrigin || !accountDestination) {
            return "0";
        }
        let res = {
            origin: this.withdraw(origin, amount),
            destination: this.deposit(destination, amount),
        };
        return res;
    },
};
module.exports = Account;
