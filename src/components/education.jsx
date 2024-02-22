import Card from "./card";

function Education() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
  };

  const content = (
    <form onSubmit={handleSubmit} className="education">
      <div>
        <label htmlFor="institution">Institution: </label>
        <input type="text" name="institution" id="institution" required />
      </div>
      <div>
        <label htmlFor="degree">Degree / Certificate: </label>
        <input type="email" name="degree" id="degree" required />
      </div>
      <div>
        <label htmlFor="years">Years: </label>
        <input type="number" name="years" id="years" />
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );

  return <Card fields={content} type={"education"} />;
}

export default Education;
