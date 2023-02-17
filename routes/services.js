const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("ourServises", { text: "world" });
});

// router.get("/new", (req, res) => {
//   res.send("User new form");
// });
router.get("/:id", (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  res.send("hello" + id);
});

module.exports = router;
