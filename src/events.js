const operations = require("./operations");

module.exports = {
    event(req, res, next) {
        console.log("Events:event");
        let body = req.body;
        let error, result;
        if (
            ["type", "amount"].every((key) => Object.keys(body).includes(key))
        ) {
            if (!body.destination && !body.origin) {
                error = {
                    code: 400,
                    message: {
                        error: "Missing Origin or Destination for the request",
                    },
                };
            } else {
                result = operations(body);
            }
        }

        if (error) {
            res.status(error.code).send(error.message);
        } else {
            res.status(result.code).send(result.message);
        }
    },
    balance(req, res, next) {
        console.log("Events:balance");
    },
};
