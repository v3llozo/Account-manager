const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
const routes = require("./src/routes")(app);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
