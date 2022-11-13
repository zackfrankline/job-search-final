import React, { useState } from "react";
import Axios from "axios";
import Job from "./Job";

function Searchfield() {
  const [input, setInput] = useState("");
  const [jobResult, setJobResult] = useState([]);

  //form Submit Handler
  const handleForm = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    let jobs;
    try {
      jobs = await Axios.post("http://localhost:3500/job-search", {
        input,
      });
    } catch (err) {
      console.log(err);
    }
    setJobResult(() => {
      return jobs.data;
    });
  };

  //form Input Handler
  const handleInput = (e) => {
    const text = e.target.value;
    setInput(text);
  };

  //Saved button handler
  const handleSaved = async () => {
    try {
      await Axios.get("http://localhost:3500/Saved");
      console.log("Get Method Success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div class="input">
        <form onSubmit={handleForm}>
          <input
            placeholder="Enter Job search"
            onChange={handleInput}
            value={input}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
        <button class="save" onClick={handleSaved}>
          Saved
        </button>
      </div>
      <div class="container">
        {jobResult.map((job, index) => {
          return (
            <Job
              key={index}
              id={index}
              title={job.title}
              companyName={job.company_name}
              via={job.via}
              location={job.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Searchfield;
