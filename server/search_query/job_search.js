const SerpApi = require("google-search-results-nodejs");
const config = require("../config/api_key")
const search = new SerpApi.GoogleSearch(config.apiKey);

const searchQuery=(input,handler)=>{
  const params = {
    engine:"google_jobs",
    q: input,
    location: "Austin, Texas, United States",
  };
  
  const callback = function (data) {

    return handler(data["jobs_results"])
  };
  
  // Show result as JSON
  search.json(params, callback);

}


module.exports={
    searchQuery
}
