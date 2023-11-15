import express from "express";
import connectDB from "./config/db.js";
import userrouter from "./router/users.js";
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userrouter);
app.use(express.json);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
