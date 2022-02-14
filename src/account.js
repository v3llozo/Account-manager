accounts = [];
const Account = {
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
        return accounts.find((account) => account.id === id);
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
};
module.exports = Account;
