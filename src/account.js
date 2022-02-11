accounts = [];
const Account = {
    getAccount(id) {
        let account = accounts.find((account) => account.id === id);
        if (account) {
            return account;
        } else {
            return accounts.push({ id: id, balance: 0 });
        }
    },

    getBalance(id) {
        return accounts.find((account) => account.id === id);
    },

    deposit(id, value) {
        let account = this.getAccount(id);
        accounts.find((ac) => {
            if (ac.id === account.id) {
                ac.balance += value;
                return ac;
            }
        });
        return {};
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
