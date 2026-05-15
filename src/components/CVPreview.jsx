function CVPreview({ person, institute, work }) {

  const { name, email, phone, website } = person;

  return (
    <>
      <div className="cv-preview">

        <div className="personal">
          <h2>Name: {name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
        </div>

        <div className="education">
          <h2>Education</h2>

          {institute.map((edu, index) => (
            <div key={index}>
              <p>School: {edu.school}</p>
              <p>Passing Year: {edu.schoolPassYear}</p>
              <p>College: {edu.college}</p>
              <p>Course: {edu.course}</p>
              <p>Passing Year: {edu.collegePassYear}</p>
            </div>
          ))}
        </div>

        <div className="work">
          <h2>Work Experience</h2>

          {work.map((job, index) => (
            <div key={index}>
              <p>Company: {job.company}</p>
              <p>Job Title: {job.jobTitle}</p>
              <p>Job Responsibility: {job.jobResponsibility}</p>
              <p>Start Date: {job.startDate}</p>
              <p>End Date: {job.endDate}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default CVPreview;