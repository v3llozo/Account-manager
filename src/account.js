accounts = [];
const Account = {
    getAccount(id) {
        let account = accounts.find((account) => account.id === id);
        if (account) {
            return account;
        } else {
            let newAccount = { id: id, balance: 0 };
            accounts.push(newAccount);
            return newAccount;
        }
    },

    getBalance(id) {
        return accounts.find((account) => account.id === id);
    },

    deposit(id, value) {
        let accountId = this.getAccount(id);
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
        let account = this.getAccount(id);
        accounts.find((ac) => {
            if (ac.id === account.id) {
                ac.balance -= value;
            }
        });
        return account;
    },
};
module.exports = Account;
