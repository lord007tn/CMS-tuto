const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// connect Data base
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/CMS-tuto");
mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB Connection failed with - ", err);
});
// import routes
const articleRoutes = require("./routes/article.routes");
const categoryRoutes = require('./routes/category.routes')
const authRoutes = require('./routes/auth.routes')
// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes middlewares
app.use("/articles", articleRoutes);
app.use("/categories", categoryRoutes)
app.use('/auth', authRoutes)
const port = 8000;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
