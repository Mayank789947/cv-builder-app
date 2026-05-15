import { useState } from "react";
import PersonDetails from "./PersonDetails";
import CVPreview from "./CVPreview";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";

function FormPanel() {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        phone: "",
        website: ""
    });

    const [institute, setInstitute] = useState([
        {
            school: "",
            schoolPassYear: "",
            college: "",
            course: "",
            collegePassYear: ""
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

    const [skills, setSkills] = useState([
        {
            skill: ""
        }
    ]);

    return (
        <>
            <div className="main-content">
                <div className="form-panel">
                    <PersonDetails person={person} setPerson={setPerson} />
                    <Education institute={institute} setInstitute={setInstitute} />
                    <Work work={work} setWork={setWork} />
                    <Skill skills={skills} setSkills={setSkills} />
                </div>
                <div className="cv-preview">
                    <CVPreview person={person} institute={institute} work={work} skills={skills} />
                </div>
            </div>
        </>
    )
}

export default FormPanel;