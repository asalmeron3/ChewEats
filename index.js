let express = require("express");
let path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("./public"));
require("./public/routes/routes.js")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`ChewEats is running on ${PORT}. Enjoy!`);
});

