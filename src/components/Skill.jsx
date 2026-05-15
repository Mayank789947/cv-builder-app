import { useState } from "react";

function Skill({ skills, setSkills }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSection() {
        setIsOpen(!isOpen);
    }

    function handleChange(index, e) {
        const updatedSkill = [...skills];

        updatedSkill[index][e.target.name] = e.target.value;

        setSkills(updatedSkill);
    }

    function handleClick() {
        setSkills([
            ...skills,
            {
                skill: ""
            }
        ]);
    }

    function handleDelete(indexToDelete) {
        const filteredSkills = skills.filter(
            (_, index) => index !== indexToDelete
        );

        setSkills(filteredSkills);
    }

    return (
        <>
            <div className="section-header" onClick={toggleSection}>
                <p>Skills</p>
                <p>{isOpen ? " ▲" : " ▼"}</p>
            </div>

            <div className="skills">
                {isOpen && skills.map((item, index) => (
                    <div className="section-content" key={index}>

                        <input
                            type="text"
                            name="skill"
                            value={item.skill}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Enter skill"
                        />

                        {skills.length > 1 && (
                            <button className="dlt-skill" onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        )}

                        {index === skills.length - 1 && (
                            <button
                                className="add-skill"
                                onClick={handleClick}
                            >
                                + Add More Skill
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skill;