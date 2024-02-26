import { useState } from "react";
import Card from "./card";

function Experience() {
  const initialFormData = {
    company: "",
    title: "",
    years: "",
    description: "",
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
        <label htmlFor="company">Company: </label>
        {editMode ? (
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.company}</>
        )}
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        {editMode ? (
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.title}</>
        )}
      </div>
      <div>
        <label htmlFor="years">Years: </label>
        {editMode ? (
          <input
            type="text"
            name="years"
            id="years"
            value={formData.years}
            onChange={handleChange}
          />
        ) : (
          <>{formData.years}</>
        )}
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        {editMode ? (
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        ) : (
          <>{formData.description}</>
        )}
      </div>
      <div className="hidable">
        {!editMode && (
          <button type="button" onClick={handleEditClick} className="button">
            Edit
          </button>
        )}
        {editMode && <input type="submit" value="Save" className="button" />}
      </div>
    </form>
  );

  return <Card fields={content} type={"experience"} />;
}

export default Experience;
