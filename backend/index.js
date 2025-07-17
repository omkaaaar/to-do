const express = require("express");
const app = express();
const port = 3000;

const { connectDB } = require("./db/db");
const routes = require("./routes/routes");

connectDB();

app.use(express.json());
app.use("/routes", routes);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
