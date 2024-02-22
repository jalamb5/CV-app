import { useState } from "react";
import Card from "./card";

function General() {
  const initialFormData = {
    name: "",
    email: "",
    phone: ""
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
        <label htmlFor="name">Name: </label>
        {editMode ? (
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.name}</>
        )}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        {editMode ? (
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        ) : (
          <>{formData.email}</>
        )}
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        {editMode ? (
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        ) : (
          <>{formData.phone}</>
        )}
      </div>
      <div>
        {!editMode && (
          <button type="button" onClick={handleEditClick} className="button">
            Edit
          </button>
        )}
        {editMode && <input type="submit" value="Save" className="button" />}
      </div>
    </form>
  );

  return <Card fields={content} type={"general"} />;
}

export default General;
