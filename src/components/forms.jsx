function Forms({ type }) {
  const allForms = {
    genInfo:
      <form action="" method="get" className="cards">
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <input type="submit" value="Save" className="button"/>
      </div>
      </form>,

    education:
      <form action="" method="get" className="cards">
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
      </form>,

    experience:
      <form action="" method="get" className="cards">
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
  }

  return allForms[type]
}

export default Forms;
