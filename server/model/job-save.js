const mongoose=require("mongoose")

//Connnecting to MongoDB server
mongoose.connect("mongodb://localhost:27017/jobSaveDB",{useNewUrlParser:true})

//Job Schema
const jobSaveSchema= new mongoose.Schema({
    id:Number,
    title:String,
    companyName:String,
    via:String,
    location:String
})

//Create Model
const Job=mongoose.model("Job",jobSaveSchema)


//Handler function
const jobSaveHandler=(job)=>{

    // Job.insertMany([job],(err)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("Successfully Saved Job")
    //     }
    // })
    
    const job1=new Job(job)
    try{
        job1.save()
        console.log("Successfully saved Job")
    }
    catch(err){
        console.log(err)
    }

}

const savedJobHandler=()=>{
    try{
        Job.find({},(err,Jobs)=>{
            console.log(Jobs)
        })
    }
    catch(err){
        console.log(err)

    }
}

module.exports={
    jobSaveHandler,
    savedJobHandler
}