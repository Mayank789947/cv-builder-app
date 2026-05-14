function Education({ institute, setInstitute }) {

    function handleChange(e) {
        setInstitute({
            ...institute,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="education">

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

                <label htmlFor="college">College</label>
                <input
                    type="text"
                    name="college"
                    id="college"
                    value={institute.college}
                    onChange={handleChange}
                    placeholder="College Name"
                />

                <label htmlFor="course">Course</label>
                <input
                    type="text"
                    name="course"
                    id="course"
                    value={institute.course}
                    onChange={handleChange}
                    placeholder="Course Name"
                />

                <label htmlFor="collegePassYear">Passing Year</label>
                <input
                    type="text"
                    name="collegePassYear"
                    id="collegePassYear"
                    value={institute.collegePassYear}
                    onChange={handleChange}
                    placeholder="Year"
                />
            </div>
        </>
    )
}

export default Education;