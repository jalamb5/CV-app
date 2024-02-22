import { useState } from "react";
import Card from "./card";

function Education() {
  const initialFormData = {
    institution: "",
    degree: "",
    year: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editMode, setEditMode] = useState(true); // Set to true initially to show input fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const content = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="institution">Institution: </label>
        {editMode ? (
          <input
            type="text"
            name="institution"
            id="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.institution}</>
        )}
      </div>
      <div>
        <label htmlFor="degree">Degree / Certificate: </label>
        {editMode ? (
          <input
            type="text"
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.degree}</>
        )}
      </div>
      <div>
        <label htmlFor="year">Year: </label>
        {editMode ? (
          <input
            type="number"
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        ) : (
          <>{formData.year}</>
        )}
      </div>
      <div>
        {!editMode && (
          <button type="button" onClick={handleEditClick} className="button">
            Edit
          </button>
        )}
        {editMode && <input type="submit" value="Save" />}
      </div>
    </form>
  );

  return <Card fields={content} type={"education"} />;
}

export default Education;
