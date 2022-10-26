const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/job-route.js")(app);

app.get("/", (req, res) => {
  res.send("this is running ");
});

app.listen(port, () => {
  console.log("server running on " + port);
});
