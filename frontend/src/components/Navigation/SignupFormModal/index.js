import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import * as sessionActions from "../../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    password: null,
    confirmPassword: null,
    image: null,
    phoneNumber: null,
  });
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (formData.email.length < 3 || formData.email.length >= 70)
      err.email = "Email must be between 3 and 70 characters long";

    if (formData.username.length < 4 || formData.username.length >= 30)
      err.username = "Username must be between 4 and 30 characters long";

    if (
      formData.firstName.length === 0 ||
      formData.firstName.length >= 30 ||
      /\d/.test(formData.firstName)
    )
      err.firstName = "Invalid first name";

    if (
      formData.lastName.length === 0 ||
      formData.lastName.length >= 30 ||
      /\d/.test(formData.lastName)
    )
      err.lastName = "Invalid last name";

    if (formData.password.length < 6 || formData.password.length >= 20)
      err.password = "Password must be between 6 and 20 characters long";

    if (formData.confirmPassword !== formData.password)
      err.confirmPassword = "Passwords do not match";

    setErrors(err);

    if (Object.values(err).length === 0) {
      dispatch(sessionActions.signup(formData));
      closeModal();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };
  return (
    <div className="sign-up-div">
      <h1 className="sign-up-h1">Sign Up</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="sign-up-form">
        <label className="sign-up-form-label">
          Email
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label className="sign-up-form-label">
          Username
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="text"
            value={formData.username}
            name="username"
            title="Please keep characters between 4 to 30 "
            placeholder="Username"
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        {errors.username && <p className="errors">{errors.username}</p>}
        <label className="sign-up-form-label">
          First name
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
            required
            title="Please keep characters between 1 to 30 "
          />
        </label>
        {errors.firstName && <p className="errors">{errors.firstName}</p>}
        <label className="sign-up-form-label">
          Last name
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
            title="Please keep characters between 1 to 30 "
            required
          />
        </label>
        {errors.lastName && <p className="errors">{errors.lastName}</p>}
        <label className="sign-up-form-label">
          Password
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            required
            title="Please keep characters between 1 to 30 "
          />
        </label>
        {errors.lastName && <p className="errors">{errors.lastName}</p>}
        <label className="sign-up-form-label">
          Confirm Password
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="password"
            name="confirmPassword"
            placeholder=" Confirm Password"
            value={formData.confirmPassword}
            title="Please make sure this matches your password"
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p className="errors">{errors.confirmPassword}</p>
        )}
        <label className="sign-up-form-label">
          Phone Number
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
            required
            title="Please keep characters between 1 to 30 "
          />
        </label>
        {errors.password && <p className="errors">{errors.phoneNumber}</p>}
        <label>
          Avatar
          <input type="file" onChange={handleFileChange} />
        </label>
        <div className="button-div-sign-up">
          <button type="submit" className="sign-up-submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
