import { useState } from "react";
import Card from "./card";

function General() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const content = (
    <form onSubmit={handleSubmit} className="general">
    <div>
      <label htmlFor="name">Name: </label>
      <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type="text" name="name" id="name" required />
    </div>
    <div>
      <label htmlFor="email">Email: </label>
      <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="email" name="email" id="email" required />
    </div>
    <div>
      <label htmlFor="phone">Phone: </label>
      <input onChange={(e) => setFormData({...formData, phone: e.target.value})} value={formData.phone} type="tel" name="phone" id="phone" />
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
