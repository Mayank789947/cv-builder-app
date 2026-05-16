import { useState } from "react";
import PersonDetails from "./PersonDetails";
import CVPreview from "./CVPreview";
import Education from "./Education";
import Work from "./Work";
import TechStacks from "./TechStacks";
import Skills from "./Skills";


function FormPanel() {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        phone: "",
        website: ""
    });

    const [institute, setInstitute] = useState([
        {
            college: "",
            course: "",
            collegePassYear: "",
            currentlyStudying: false
        }
    ]);

    const [work, setWork] = useState([
        {
            company: "",
            jobTitle: "",
            jobResponsibility: "",
            startDate: "",
            endDate: ""
        }
    ]);

    const [techStacks, setTechStacks] = useState([
        {
            techStack: ""
        }
    ]);

    const [skills, setSkills] = useState([
        {
            skill: ""
        }
    ])

    return (
        <>
            <div className="main-content">
                <div className="form-panel">
                    <PersonDetails person={person} setPerson={setPerson} />
                    <Education institute={institute} setInstitute={setInstitute} />
                    <Work work={work} setWork={setWork} />
                    <Skills skills={skills} setSkills={setSkills}/>
                    <TechStacks techStacks={techStacks} setTechStacks={setTechStacks} />
                </div>
                <div className="cv-preview">
                    <CVPreview person={person} institute={institute} work={work} skills={skills} techStacks={techStacks} />
                </div>
            </div>
        </>
    )
}

export default FormPanel;