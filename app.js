// External Import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

// Internal Import
const {
  eroorhandler,
  notFoundghandler,
} = require("./middlewares/common/errorhandler");
const app = express();
dotenv.config();

// Database Connecton
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing Setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 Not Found Handler
app.use(notFoundghandler);

// Common Eroor handler
app.use(eroorhandler);

// Listener
app.listen(process.env.PORT, () => {
  console.log("server is running at", process.env.PORT);
});
