const Account = require("../account");
module.exports = (data) => {
    return {
        code: 201,
        message: {
            destination: Account.deposit(data.destination, data.amount),
        },
    };
};
