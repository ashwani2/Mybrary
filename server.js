if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}


const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
require("./db/conn");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));




app.use("/", indexRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log("server started on the port 3000");
})