const Account = require("../account");
module.exports = (data) => {
    let res = Account.withdraw(data.origin, data.amount);
    if (res == 0) {
        return {
            code: 404,
            message: "0",
        };
    } else {
        return {
            code: 201,
            message: res,
        };
    }
};
