var db = require("../models")
//importing axios
var axios = require("axios")
function apiroutes(app)
{
    //get handles the api route
    app.get("/api/googlebooks/:search",function(req,res){
           var search = req.params.search
           axios.get("https://www.googleapis.com/books/v1/volumes?q="+search).then(function(response){
               console.log(response.data.items)

               res.json(response.data.items)
           })
    })
    //using the route to send data
    app.post("/api/books",function(req,res){
        db.Book.create(req.body).then(function(data){
            res.json(data)
        })
    })
}

module.exports = apiroutes
