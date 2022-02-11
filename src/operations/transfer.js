const Account = require("../account");
module.exports = (data) => {
    console.log(Account.withdraw(data.origin, data.amount));
    console.log(Account.deposit(data.destination, data.amount));
    return "transfer ok";
};
