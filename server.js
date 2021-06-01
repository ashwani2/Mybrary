if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}


const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");
require("./db/conn");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(expressLayouts);
app.use(express.static("public"));




app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("server started on the port 3000");
})