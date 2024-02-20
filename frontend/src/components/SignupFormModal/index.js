import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState(null);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  let newUser = {
    email,
    username,
    firstName,
    lastName,
    password,
    confirmPassword,
    image,
    phone,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = {};
    // if (isEmailFormat(newUser.email)) err.email = "Email Format is incorrect"
    if (newUser.email.length < 3)
      err.email = "Email must contain a least 3 character";
    if (newUser.email.length >= 70)
      err.email = "Email cannot exceed 70 characters long";
    if (newUser.username.length < 4)
      err.username = "Username must contain a least 4 character ";
    if (newUser.username.length >= 30)
      err.username = "Username cannot exceed 30 characters long";
    if (newUser.firstName.length === 0)
      err.firstName = "First name must contain a least 1 character ";
    if (typeof newUser.firstName === String)
      err.firstName = "First name cannot contain any numbers";
    if (newUser.firstName.length >= 30)
      err.firstName = "First name cannot exceed 30 characters long";
    if (newUser.lastName.length === 0)
      err.lastName = "Last name must contain a least 1 character ";
    if (typeof newUser.lastName === String)
      err.lastName = "Last name cannot contain any numbers";
    if (newUser.lastName.length >= 30)
      err.lastName = "Last name cannot exceed 30 characters long";
    if (newUser.password.length < 6)
      err.password = "Password must be at least 6 characters long";
    if (newUser.password.length >= 20)
      err.password = "Password cannot exceed past 20 characters long";
    if (newUser.confirmPassword.length < 6)
      err.password = "Password must be at least 6 characters long";
    if (newUser.confirmPassword.length >= 20)
      err.password = "Password cannot exceed past 20 characters long";
    if (newUser.password !== confirmPassword)
      err.password = "Confirm Password field must be the same as the Password";

    console.log(err);
    setErrors(err);

    console.log(errors);

    if (Object.values(err).length === 0) {
      dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
          image,
          phone,
        })
      );
      closeModal();
    }
  };
  const updateFile = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (file) setImage(file);
  };
  let boolean = false;
  const checkState = () => {
    if (
      email.length === 0 ||
      username <= 3 ||
      username.length === 0 ||
      lastName.length === 0 ||
      password.length <= 5 ||
      confirmPassword.length === 0
    )
      boolean = true;
    return boolean;
  };

  useEffect(() => {}, [dispatch, newUser]);

  return (
    <div className="sign-up-div">
      <h1 className="sign-up-h1">Sign Up</h1>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label className="sign-up-form-label">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={username}
            title="Please keep characters between 4 to 30 "
            placeholder="Username"
            onChange={(e) =>
              setUsername(e.target.value ? e.target.value : username)
            }
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
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            title="Please keep characters between 1 to 30 "
          />
        </label>
        {errors.password && <p className="errors">{errors.password}</p>}
        <label className="sign-up-form-label">
          Confirm Password
          <input
            minLength="1"
            maxLength="30"
            className="sign-up-form-input"
            type="password"
            placeholder=" Confirm Password"
            value={confirmPassword}
            title="Please make sure this matches your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p className="errors">{errors.confirmPassword}</p>
        )}
        <label>
          Avatar
          <input type="file" onChange={updateFile} />
        </label>
        <div className="button-div-sign-up">
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="sign-up-submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
