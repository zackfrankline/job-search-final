const Job=(props)=>{

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
         </div>
            
    )

}

export default Job