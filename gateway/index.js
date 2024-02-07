const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();
app.use(express.json());
app.use("/customer", proxy("http://localhost:8004"));
app.use("/shopping", proxy("http://localhost:8005"));
app.use("/", proxy("http://localhost:8006")); // products
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
