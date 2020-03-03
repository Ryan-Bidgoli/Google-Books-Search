var express = require("express")
var app = express()
var PORT = process.env.PORT||3001
var mongoose = require("mongoose")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/googlebooks")
var apiroutes = require("./routes/apiroutes")
apiroutes(app)
app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})