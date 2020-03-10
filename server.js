//importing express
var express = require("express")
var app = express()
//setting up server port
var PORT = process.env.PORT||3001
//importing mongoose
var mongoose = require("mongoose")
//load files in public directory
app.use(express.static("public"))
//except request of incoming objects
app.use(express.urlencoded({extended:true}))
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/googlebooks")
var apiroutes = require("./routes/apiroutes")
apiroutes(app)
app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})
