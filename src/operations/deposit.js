const Account = require("../account");
module.exports = (data) => {
    return {
        code: 201,
        message: Account.deposit(data.destination, data.amount),
    };
};
