import React, { useState } from "react";
import "./login-form.scss";

const InputEmail = ({ setEmail, email }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  function handleBlur() {
    setErrorMessage(true);
  }

  

  function handleChange(e) {
    const input = e.target.value;
    const regEmail = /.+@.+\..+/g;
    const valid = regEmail.test(input);
    setEmail({ input, valid });
  }

  return (
    <div className="form-group">
      <label htmlFor="inputEmail">Email address</label>
      <div className="input-group">
        <input
          type="email"
          className={`form-control is-${email.valid ? "valid" : "invalid"}`}
          id="inputEmail"
          placeholder="Enter email"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={email.input}
        />
        {errorMessage && (
          <div className={` ${email.valid ? "valid" : "invalid"}-feedback `}>
            {email.valid ? "Good." : "Please choose a valid email."}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputEmail;
