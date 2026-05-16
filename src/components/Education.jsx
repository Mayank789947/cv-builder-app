import { useState } from "react";

function Education({ institute, setInstitute }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSection() {
        setIsOpen(!isOpen);
    }

    function handleChange(index, e) {
        const updatedInstitute = [...institute];

        const value =
            e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value;

        updatedInstitute[index][e.target.name] = value;

        if (e.target.name === "currentlyStudying" && e.target.checked) {
            updatedInstitute[index].collegePassYear = "";
        }

        setInstitute(updatedInstitute);
    }

    function handleClick() {
        setInstitute([
            ...institute,
            {
                college: "",
                course: "",
                collegePassYear: "",
                currentlyStudying: false
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
            <div className="section-header" onClick={toggleSection}>
                <p>Education</p>
                <p>{isOpen ? " ▲" : " ▼"}</p>
            </div>

            {isOpen && <div className="section-content education-details">

                {institute.map((inst, index) => (
                    <div className="college-details" key={index}>
                        <h2>Institute {index + 1}</h2>

                        <label>Institute Name:</label>
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

                        <label>Passed Year:</label>
                        <input
                            type="text"
                            name="collegePassYear"
                            value={inst.collegePassYear}
                            disabled={inst.currentlyStudying}
                            onChange={(e) => handleChange(index, e)}
                        />

                        <label>
                            <input
                                type="checkbox"
                                name="currentlyStudying"
                                checked={inst.currentlyStudying}
                                onChange={(e) => handleChange(index, e)}
                            />
                            I am currently studying here
                        </label>

                        {institute.length > 1 && (
                            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        )}

                        {/* ONLY LAST ITEM GETS BUTTON */}
                        {index === institute.length - 1 && (
                            <button className="add-btn" onClick={handleClick}>
                                + Add More Course
                            </button>
                        )}
                    </div>
                ))}
            </div>}
        </>
    )
}

export default Education;