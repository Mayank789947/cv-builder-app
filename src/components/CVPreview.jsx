import { Mail, Phone, Globe } from "lucide-react";

function CVPreview({ person, institute, work, techStacks, skills }) {

   const { name, email, phone, website } = person;

   // PERSONAL INFO CHECK
   const hasPersonalInfo =
      name || email || phone || website;

   // EDUCATION CHECK
   const hasEducation = institute.some(
      (edu) =>
         edu.college ||
         edu.course ||
         edu.collegePassYear ||
         edu.currentlyStudying
   );

   // WORK CHECK
   const hasWork = work.some(
      (job) =>
         job.company ||
         job.jobTitle ||
         job.jobResponsibility ||
         job.startDate ||
         job.endDate ||
         job.currentlyWorking
   );

   // TECH STACKS CHECK
   const hasTechStacks = techStacks.some(
      (item) => item.techStack
   );

   const hasSkills = skills.some(
      (item) => item.skill
   );

   return (
      <div className="cv-preview">

         <div className="cv-paper">

            {/* PERSONAL SECTION */}
            {hasPersonalInfo && (
               <div className="personal">
                  {name && <p className="name">{name}</p>}
                  {email && <p className="email"><Mail size={16}/>{email}</p>}
                  {phone && <p className="phone"><Phone size={16}/>{phone}</p>}
                  {website && <p className="globe"><Globe size={16}/>{website}</p>}
               </div>
            )}

            {/* EDUCATION SECTION */}
            {hasEducation && institute.map((edu, index) => (
               <div className="edu-card" key={index}>

                  <h4>Institute {index + 1}</h4>

                  {edu.college && (
                     <p>College: {edu.college}</p>
                  )}

                  {edu.course && (
                     <p>Course: {edu.course}</p>
                  )}

                  {(edu.collegePassYear || edu.currentlyStudying) && (
                     <p>
                        End Date:
                        {edu.currentlyStudying
                           ? " Currently Studying"
                           : " " + edu.collegePassYear}
                     </p>
                  )}

               </div>
            ))}

            {/* WORK SECTION */}
            {hasWork && work.map((job, index) => (
               <div className="work-card" key={index}>

                  <h4>Experience {index + 1}</h4>

                  {job.company && (
                     <p>Company: {job.company}</p>
                  )}

                  {job.jobTitle && (
                     <p>Job Title: {job.jobTitle}</p>
                  )}

                  {job.jobResponsibility && (
                     <p>
                        Job Responsibility: {job.jobResponsibility}
                     </p>
                  )}

                  {job.startDate && (
                     <p>
                        Start Date:
                        {" " + job.startDate}
                     </p>
                  )}

                  {(job.endDate || job.currentlyWorking) && (
                     <p>
                        End Date:
                        {job.currentlyWorking
                           ? " Currently Working"
                           : " " + job.endDate}
                     </p>
                  )}

               </div>
            ))}

            {/* SKILLS SECTION */}
            {hasSkills && (
               <div className="skills-preview">
                  <h3>Soft Skills</h3>

                  <div className="skills-list">
                     {skills.map((item, index) => (
                        item.skill && (
                           <ul className="list">
                              <li
                                 className="skill-listItem"
                                 key={index}
                              >
                                 {item.skill}
                              </li>
                           </ul>
                        )
                     ))}
                  </div>
               </div>
            )}

            {/* TECH STACKS SECTION */}
            {hasTechStacks && (
               <div className="techStacks-preview">
                  <h3>Tech Stack</h3>

                  <div className="techStacks-list">
                     {techStacks.map((item, index) => (
                        item.techStack && (
                           <span
                              className="techStack-pill"
                              key={index}
                           >
                              {item.techStack}
                           </span>
                        )
                     ))}
                  </div>
               </div>
            )}



         </div>

      </div>
   );
}

export default CVPreview;