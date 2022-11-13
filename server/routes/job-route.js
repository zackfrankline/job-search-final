const serpApi = require("../search_query/job_search");
const jobSave = require("../model/job-save")

module.exports = (app) => {


  //JOB SEARCH API
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
  
  //JOB SAVE 
  app.post("/job-save",(req,res)=>{

    const job=req.body.props;
    // console.log(typeof job)
    jobSave.jobSaveHandler(job);


  });

  //Saved JObs
  app.get("/Saved",(req,res)=>{
    jobSave.savedJobHandler();
  })


};
