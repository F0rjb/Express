const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const today = new Date();
  const hour = today.getHours();
  const day = today.getDay();
  console.log(hour);
  (day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday") &&
  hour <= 17 &&
  hour >= 9
    ? res.render("homePage", { text: "world", today: today })
    : res.send("Come back when we're open ");
});

const servRouter = require("./routes/services");
const homeRouter = require("./routes/homepage");
const contactRouter = require("./routes/contact");
app.use("/service", servRouter);
app.use("/home", homeRouter);
app.use("/contact", contactRouter);

app.listen(3000);
