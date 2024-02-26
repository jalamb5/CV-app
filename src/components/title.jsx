import { useState } from "react";

function Title() {
  const [formData, setFormData] = useState({ pagetitle: "CV Builder" });
  const [editMode, setEditMode] = useState(false); // Set to false initially to hide input field

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

  return (
    <>
      <form id="pagetitle" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pagetitle"></label>
          {editMode ? (
            <input
              type="text"
              name="pagetitle"
              id="pagetitle"
              value={formData.pagetitle}
              onChange={handleChange}
              required
            />
          ) : (
            <h1>{formData.pagetitle}</h1>
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
    </>
  );
}

export default Title;
