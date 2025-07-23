import React, { useState } from "react";
import axios from "axios";
import "../styles/FormStyles.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    panNumber: "",
    email: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/register",
        formData
      );
      setMessage("✅ Registration Successful!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Registration Failed");
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      {message && (
        <div
          className={`form-message ${
            message.includes("Successful") ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input name="dob" type="date" onChange={handleChange} required />
        <input
          name="panNumber"
          placeholder="PAN"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
