const Account = require("../account");
module.exports = (data) => {
    console.log(Account.withdraw(data.origin, data.amount));
    return "withdraw ok";
};
