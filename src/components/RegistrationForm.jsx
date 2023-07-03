import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
    brief: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agreementAccepted: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const {
    name,
    phone,
    email,
    photo,
    brief,
    dob,
    gender,
    password,
    confirmPassword,
    agreementAccepted,
  } = formData;

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Brief:</label>
          <textarea name="brief" value={brief} onChange={handleChange}></textarea>
          required
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={dob} onChange={handleChange} />
        required
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            title="Must contain at least 8 characters, including uppercase, lowercase letters and numbers"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreementAccepted"
              checked={agreementAccepted}
              onChange={handleChange}
            />
            I accept the agreement
          </label>
        </div>

        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default RegistrationForm;
