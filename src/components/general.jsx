import Card from "./card";

function General() {

  const content = (
    <form action="" method="get" className="cards general">
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
    </form>
  );

  return (
    <Card fields={content} type={'general'}/>
  )
}

export default General
