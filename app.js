const express = require("express")
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))

app.use("/", require("./src/routes/mainRoutes.js"))

app.use("/admin", require("./src/routes/adminRoutes.js"))

app.use("/shop", require("./src/routes/shopRoutes.js"))
 
app.use("/auth", require("./src/routes/authRoutes.js"))

app.use((req, res, next) => {
  res.status(404).send("La página no existe")
});

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));