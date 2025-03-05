import React from "react";
import { useLoaderData } from "react-router";
import jobServices from "../../services/jobServices";
import { toast } from "react-toastify";

const CandidateDashboard = () => {
  const jobs = useLoaderData();

  const handleJobApply = (jobId) => {
    jobServices
      .applyJob(jobId)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl">Candidate Dashboard</h2>
      <div>
        {jobs.map((job) => (
          <div key={job._id} className="mb-3 p-3 border rounded">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button
              className="bg-green-500 mt-2 px-3 py-1 text-white"
              onClick={() => handleJobApply(job._id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateDashboard;
