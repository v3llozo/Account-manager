const Account = require("../account");
module.exports = (data) => {
    return Account.deposit(data.destination, data.amount);
};
