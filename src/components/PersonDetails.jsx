import { useState } from "react";

function PersonDetails({ person, setPerson }) {

  const [isOpen, setIsOpen] = useState(true);

  function toggleSection() {
    setIsOpen(!isOpen);
  }

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="section-header person" onClick={toggleSection}>
        <p>Personal Details</p>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="person-details section-content">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={person.name}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={person.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />

        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={person.phone}
          onChange={handleChange}
        />

        <label htmlFor="website">Website: </label>
        <input
          type="text"
          name="website"
          id="website"
          value={person.website}
          onChange={handleChange}
        />
      </div>}
    </>
  )
}

export default PersonDetails;