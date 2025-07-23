import React, { useState } from "react";
import axios from "axios";
import "../styles/FormStyles.css";

function UserForm() {
  const [formData, setFormData] = useState({ name: "", dob: "", pan: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/verify",
        formData
      );
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>User Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input name="dob" type="date" onChange={handleChange} required />
        <input name="pan" placeholder="PAN" onChange={handleChange} required />
        <button type="submit">Verify</button>
      </form>

      {result && (
        <div className="verification-result">
          {result.status === "success" ? (
            <div className="verified-box">
              <h3>User Verified ✅</h3>
              <p>Name: {result.user.name}</p>
              <p>DOB: {result.user.dob}</p>
              <p>PAN: {result.user.panNumber}</p>
              <p>Email: {result.user.email}</p>
              <p>Phone: {result.user.phoneNumber}</p>
            </div>
          ) : (
            <div className="error-box">
              <h3>Verification Failed ❌</h3>
              <p>Mismatched fields: {result.mismatchedFields.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserForm;
