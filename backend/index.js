const express = require("express");
const app = express();
const port = 3000;

const { connectDB } = require("./db/db");
const routes = require("./routes/routes");

connectDB().then(() => {
  app.use(express.json());
  app.use("/api/todos", routes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
