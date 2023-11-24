const express = require("express");
const app = express();

const connectDB = require("./config/db");
const siswarouter = require("./router/users");
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(siswarouter);
  
//

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//

connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
