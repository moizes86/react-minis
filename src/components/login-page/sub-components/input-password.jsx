import React, { useState } from "react";

const InputPassword = ({ setPassword, password }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  function handleBlur() {
    setErrorMessage(true);
  }

  function handlePassword(e) {
    const input = e.target.value;
    const regPassword = /^.{6,}$/g;
    const valid = regPassword.test(e.target.value);
    setPassword({ input, valid });
  }

  return (
    <div className="form-group">
      <label htmlFor="inputPassword">Password</label>
      <div className="input-group">
        <input
          type="password"
          className={`form-control is-${password.valid ? "valid" : "invalid"}`}
          id="inputPassword"
          placeholder="Password"
          required
          onChange={handlePassword}
          onBlur={handleBlur}
          value={password.input}
        />
        {errorMessage && (
          <div className={`${password.valid ? "valid" : "invalid"}-feedback`}>
            {password.valid ? "Good." : "Password must have at least 6 characters."}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
