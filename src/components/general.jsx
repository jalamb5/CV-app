import Card from "./card.jsx";

function General() {
  const content = (
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
        <input type="submit" value="Save" />
      </div>
    </form>
  );
  const genInfo = <Card fields={content} />;

  return <>{genInfo}</>;
}

export default General;
