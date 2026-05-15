import { useState } from "react";
import PersonDetails from "./PersonDetails";
import CVPreview from "./CVPreview";
import Education from "./Education";
import Work from "./Work";

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
    
    return (
        <>
            <div className="form-panel">
                <PersonDetails person={person} setPerson={setPerson} />
                <Education institute={institute} setInstitute={setInstitute} />
                <Work work={work} setWork={setWork} />
            </div>
            <div className="cv-preview">
                <CVPreview person={person} institute={institute} work={work} />
            </div>
        </>
    )
}

export default FormPanel;