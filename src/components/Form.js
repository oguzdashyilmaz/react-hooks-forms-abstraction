import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} name={formData.firstName} />
      <input type="text" onChange={handleChange} value={formData.lastName} name={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
