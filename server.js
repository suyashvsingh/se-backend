const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/bookticket", require("./routes/api/bookticket"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
