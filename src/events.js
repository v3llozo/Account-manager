const operations = require("./operations");
const Account = require("./account");

module.exports = {
    event(req, res, next) {
        console.log("Events:event");
        let body = req.body;
        let result;
        let error = {};
        if (!body.type || !body.amount) {
            error.code = 400;
            error.message = "Missing Type or Amount for the request";
        } else if (!body.destination && !body.origin) {
            error.code = 400;
            error.message = "Missing Origin or Destination for the request";
        } else if (body.destination < 0 || body.origin < 0) {
            error.code = 400;
            error.message = "Account ID must be a positive value";
        } else if (body.amount < 0) {
            error.code = 400;
            error.message = "Amount must be a positive value";
        } else {
            result = operations(body);
        }

        if (error.code) {
            res.status(error.code).send(error.message);
        } else {
            res.status(result.code).send(result.message);
        }
    },
    balance(req, res, next) {
        console.log("Events:balance");
        let id = req.query.account_id;
        let result = {};
        let error = {};
        if (!id) {
            error.code = 400;
            error.message = "Missing account_id for the request";
        } else {
            result = Account.getBalance(id);
            if (!result) {
                error.code = 404;
                error.message = "0";
            }
        }
        if (error.code) {
            res.status(error.code).send(error.message);
        } else {
            res.send(result.balance.toString());
        }
    },
    reset(req, res, next) {
        console.log("Events:reset");
        res.send(Account.reset());
    },
};
