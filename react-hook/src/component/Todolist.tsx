import { useState } from "react";

const Todolist = () => {
  const [job, setJob]: any = useState("");
  const [jobs, setJobs]: any = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs") || "{}");

    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs((prev: any) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      console.log(jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)}></input>

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job: any, index: any) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
