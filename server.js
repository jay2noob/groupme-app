const express = require("express");
const connectDB = require("./config/db");

const app = express();
const bodyParser = require("body-parser");
global.__basedir = __dirname;
global.pageOptions = {
  limit: 15 // total number of items
}

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/static', express.static('public'))

app.get("/", (req, res) => res.send("API running..."));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/events", require("./routes/api/events"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/groups", require("./routes/api/groups"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
