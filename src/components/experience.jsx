import Card from "./card";

function Experience() {

  const content = (
    <form action="" method="get" className="cards experience">
    <div>
      <label htmlFor="company">Company: </label>
      <input type="text" name="company" id="company" required />
    </div>
    <div>
      <label htmlFor="title">Title: </label>
      <input type="email" name="title" id="title" required />
    </div>
    <div>
      <label htmlFor="years">Years: </label>
      <input type="number" name="years" id="years" />
    </div>
    <div>
      <label htmlFor="description">Description: </label>
      <textarea name="description" id="description"></textarea>
    </div>
    <div>
      <input type="submit" value="Save" />
    </div>
    </form>
  );

  return (
    <Card fields={content} />
  )
}

export default Experience