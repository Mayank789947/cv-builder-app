function Education({ institute, setInstitute }) {

    function handleChange(index, e) {
        const updatedInstitute = [...institute];

        updatedInstitute[index][e.target.name] = e.target.value;

        setInstitute(updatedInstitute);
    }

    function handleClick() {
        setInstitute([
            ...institute,
            {
                college: "",
                course: "",
                collegePassYear: ""
            }
        ])
    }

    function handleDelete(indexToDelete) {
        const filteredWork = institute.filter(
            (_, index) => index !== indexToDelete
        );

        setInstitute(filteredWork);
    }

    return (
        <>
            <div className="education-details">
                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name="school"
                    id="school"
                    value={institute.school}
                    onChange={handleChange}
                    placeholder="School Name"
                />

                <label htmlFor="schoolPassYear">Passing Year</label>
                <input
                    type="text"
                    name="schoolPassYear"
                    id="schoolPassYear"
                    value={institute.schoolPassYear}
                    onChange={handleChange}
                    placeholder="Year"
                />

                {institute.map((inst, index) => (
                    <div className="college-details" key={index}>
                        <h2>College {index + 1}</h2>

                        <label>College Name:</label>
                        <input
                            type="text"
                            name="college"
                            value={inst.college}
                            onChange={(e) => handleChange(index, e)}
                        />

                        <label>Course:</label>
                        <input
                            type="text"
                            name="course"
                            value={inst.course}
                            onChange={(e) => handleChange(index, e)}
                        />

                        <label>Pass Year:</label>
                        <input
                            type="text"
                            name="passYear"
                            value={inst.collegePassYear}
                            onChange={(e) => handleChange(index, e)}
                        />

                        {institute.length > 1 && (
                            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        )}

                        {/* ONLY LAST ITEM GETS BUTTON */}
                        {index === institute.length - 1 && (
                            <button className="add-btn" onClick={handleClick}>
                                + Add More Degree
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education;