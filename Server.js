const express = require("express")
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const booksRoute = require("./routes/books")


const app = express()
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/bookdb",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=> console.log("connectedd to mongoDB")).catch((err)=> console.error("i cant connect to mongoDB", err))

app.use("/api/books", booksRoute)

const port = 3000;
app.listen(port, ()=> console.log("listening on port 3000"))