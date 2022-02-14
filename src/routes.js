const Events = require("./events");
module.exports = router = (app) => {
    app.post("/reset", Events.reset);
    app.post("/event", Events.event);
    app.get("/balance", Events.balance);
};
