import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const validate = (fieldValues = form) => {
    const tempErrors = { ...errors };
    if ("name" in fieldValues)
      tempErrors.name = !fieldValues.name.trim() ? "Name is required" : "";
    if ("email" in fieldValues)
      tempErrors.email =
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email) ? "" : "Invalid email";

    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updatedForm = { ...prev, [name]: value };
      validate({ [name]: value });
      return updatedForm;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate({ [name]: form[name] });
  };

  const isValid =
    Object.values(errors).every((x) => x === "") &&
    Object.values(touched).length === 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(form);
    if (isValid) {
      console.log("Submitted:", form);
      navigate("/");
    }
  };

  return (
    <div className="page center">
      <h1 className="title">Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input"
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <button type="submit" className="btn" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
