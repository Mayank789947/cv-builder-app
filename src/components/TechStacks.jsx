import { useState } from "react";

function TechStacks({ techStacks, setTechStacks }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSection() {
        setIsOpen(!isOpen);
    }

    function handleChange(index, e) {
        const updatedTechStacks = [...techStacks];

        updatedTechStacks[index][e.target.name] = e.target.value;

        setTechStacks(updatedTechStacks);
    }

    function handleClick() {
        setTechStacks([
            ...techStacks,
            {
                techStack: ""
            }
        ]);
    }

    function handleDelete(indexToDelete) {
        const filteredTechStacks = techStacks.filter(
            (_, index) => index !== indexToDelete
        );

        setTechStacks(filteredTechStacks);
    }

    return (
        <>
            <div className="section-header" onClick={toggleSection}>
                <p>Tech Stacks</p>
                <p>{isOpen ? " ▲" : " ▼"}</p>
            </div>

            <div className="techStacks">
                {isOpen && techStacks.map((item, index) => (
                    <div className="section-content" key={index}>

                        <input
                            type="text"
                            name="techStack"
                            value={item.techStack}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Eg: JavaScript"
                        />

                        {techStacks.length > 1 && (
                            <button className="dlt-tech-stack" onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        )}

                        {index === techStacks.length - 1 && (
                            <button
                                className="add-tech-stack"
                                onClick={handleClick}
                            >
                                + Add More Tech Stack
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TechStacks;