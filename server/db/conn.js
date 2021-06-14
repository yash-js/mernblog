const mongoose = require("mongoose");

const db = process.env.DB

mongoose.connect(db, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED"))
.catch(err => console.log(err))