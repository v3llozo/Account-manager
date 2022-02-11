const Events = require("./events");
module.exports = router = (app) => {
    app.post("/reset", (req, res) => {
        console.log(req.body);
        res.send("Hello!");
    });

    app.post("/event", Events.event);
    app.get("/balance", Events.balance);
    // POST /event {"type":"deposit", "destination":"100", "amount":10}
    // POST /event {"type":"deposit", "destination":"100", "amount":10}
    // POST /event {"type":"withdraw", "origin":"200", "amount":10}
    // POST /event {"type":"withdraw", "origin":"100", "amount":5}
    // POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}
    // POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}
};
