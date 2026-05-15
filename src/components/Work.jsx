function Work({ work, setWork }) {

  function handleChange(index, e) {
    const updatedWork = [...work];

    updatedWork[index][e.target.name] = e.target.value;

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
        endDate: ""
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
      {work.map((job, index) => (
        <div className="work-experience" key={index}>
          <h2>Work {index + 1}</h2>

          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={job.jobTitle}
            onChange={(e) => handleChange(index, e)}
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
            onChange={(e) => handleChange(index, e)}
          />

          {work.length > 1 && (
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          )}

          {/* ONLY LAST ITEM GETS BUTTON */}
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