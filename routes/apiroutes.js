var axios = require("axios")
function apiroutes(app)
{
    app.get("/api/googlebooks/:search",function(req,res){
           var search = req.params.search
           axios.get("https://www.googleapis.com/books/v1/volumes?q="+search).then(function(response){
               console.log(response.data.items)

               res.json(response.data.items)
           })
    })
}

module.exports = apiroutes