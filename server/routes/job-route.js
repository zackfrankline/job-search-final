const serpApi = require("../search_query/job_search");

module.exports = (app) => {


  app.post("/job-search", async (req, res) => {
    console.log(req.body.input)
    const input=req.body.input
    serpApi.searchQuery(input, async (data) => {
      return result(data);
    });
    const result = (data) => {
      res.send(data)
    };
  });
};
