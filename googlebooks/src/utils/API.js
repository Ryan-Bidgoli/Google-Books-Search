// importing axios
import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getgooglebooks: function(search) {
    return axios.get("/api/googlebooks/"+search);
  },
  postGoogleBooks:function(dbBook){
    console.log("dfsdbnpo",dbBook)
    return  axios.post("/api/books", dbBook)
  }
};
