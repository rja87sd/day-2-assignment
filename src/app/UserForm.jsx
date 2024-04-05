"use client";

import React, { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleSubmission = (e) => {
    e.preventDefault();
    alert(`Form submitted with input: ${name}.`);
  };

  return (
    <form onSubmit={handleSubmission}>
      <label>
        {<h3>Your Name: </h3>}
        <input onChange={handleName} type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
