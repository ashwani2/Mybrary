const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected Succesfully");
}).catch((e) => {
    console.log(e);
})