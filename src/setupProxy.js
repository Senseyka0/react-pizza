const proxy = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(proxy("/db.json", { target: "http://localhost:3005" }));
};
