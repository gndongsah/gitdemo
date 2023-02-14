










// importing express frameworkconst express = require("express"); const app = express(); // Respond with "hello world" for requests that hit our root "/"app.get("/", function (req, res) {return res.send("Hello World");}); // listen to port 3100 by defaultapp.listen(process.env.PORT || 3100, () => {console.log("Server is running");}); module.exports = app;
/// importing express frameworkconst express = require("express"); const app = express(); // Respond with "hello world" for requests that hit our root "/"app.get("/", function (req, res) {return res.send("Hello World");}); // listen to port 3100 by defaultapp.listen(process.env.PORT || 3100, () => {console.log("Server is running");}); module.exports = app;
///




