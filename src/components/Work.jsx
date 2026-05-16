import { useState } from "react";

function Work({ work, setWork }) {

  const [isOpen, setIsOpen] = useState(false);

  function toggleSection() {
    setIsOpen(!isOpen);
  }

  function handleChange(index, e) {
    const updatedWork = [...work];

    // checkbox gives checked instead of value
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    updatedWork[index][e.target.name] = value;

    // optional: clear endDate when checked
    if (e.target.name === "currentlyWorking" && e.target.checked) {
      updatedWork[index].endDate = "";
    }

    setWork(updatedWork);
  }

  function handleClick() {
    setWork([
      ...work,
      {
        company: "",
        jobTitle: "",
        jobResponsibility: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false
      }
    ]);
  }

  function handleDelete(indexToDelete) {
    const filteredWork = work.filter(
      (_, index) => index !== indexToDelete
    );

    setWork(filteredWork);
  }

  return (
    <>
      <div className="section-header" onClick={toggleSection}>
        <p>Work Experience</p>
        <p>{isOpen ? " ▲" : " ▼"}</p>
      </div>

      {isOpen && work.map((job, index) => (
        <div className="work-experience section-content" key={index}>
          <h2>Work {index + 1}</h2>

          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="Google"
          />

          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={job.jobTitle}
            onChange={(e) => handleChange(index, e)}
            placeholder="SDE 2"
          />

          <label>Job Responsibility:</label>
          <input
            type="text"
            name="jobResponsibility"
            value={job.jobResponsibility}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={job.startDate}
            onChange={(e) => handleChange(index, e)}
          />          

          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={job.endDate}
            disabled={job.currentlyWorking}
            onChange={(e) => handleChange(index, e)}
          />

          <label>
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={job.currentlyWorking}
              onChange={(e) => handleChange(index, e)}
            />
            I am currently working here
          </label>

          {work.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          )}

          {index === work.length - 1 && (
            <button className="add-btn" onClick={handleClick}>
              + Add More Work
            </button>
          )}
        </div>
      ))}
    </>
  );
}

export default Work;