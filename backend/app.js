
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create express app
const app = express()

// handle cors + middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow all 
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); // 
    res.header("Access-Control-Allow-HEADERS", "auth-token, Origin, X-Requested-With, Content-Type, Accept")
    next();
})


// db stuff 

const db_password = 'mKL7Mjych1Nh0V20'
const uri = `mongodb+srv://cdonahoe05:${db_password}@cluster0.jw3li.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))


app.use(bodyParser.json())

// routes 
app.get("/", (res, req) => {
    res.send("yay home page")
})

const TodosRoute = require('./routes/Todos');
    app.use('/todos',TodosRoute )

// start server 
app.listen(3000, () => {
    console.log("listening at 3000")
})
