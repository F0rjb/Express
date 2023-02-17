const express = require("express");
const app = express();
const FilterDate = require("./middleware/filterDate");
app.set("view engine", "ejs");
app.use(FilterDate);
app.get("/", (req, res) => {
  const today = new Date();
  res.render("homePage", { text: "world", today: today });
});

const servRouter = require("./routes/services");
const homeRouter = require("./routes/homepage");
const contactRouter = require("./routes/contact");
const filterDate = require("./middleware/filterDate");
app.use("/service", servRouter);
app.use("/home", homeRouter);
app.use("/contact", contactRouter);

app.listen(3000);
