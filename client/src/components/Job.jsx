
import Axios from "axios"

const Job=(props)=>{


    async function handleSave(){

      try{

        Axios.post("http://localhost:3500/job-save",{props})

      }
      catch(err){
        console.log(err)
      }
    }

    return (
         <div class="note">

                <h1>{props.title}</h1>
                <h1>{props.company_name}</h1>
                <p>
                  {props.via}
                </p>
                <p>
                  {props.location}
                </p>
                <button onClick={handleSave}>Save</button>
         </div>
            
    )

}

export default Job