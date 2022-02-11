const deposit = require("./operations/deposit");
const withdraw = require("./operations/withdraw");
const transfer = require("./operations/transfer");
module.exports = (data) => {
    if (data.type == "deposit") {
        return deposit(data);
    }
    if (data.type == "withdraw") {
        return withdraw(data);
    }
    if (data.type == "transfer") {
        return transfer(data);
    }
};
