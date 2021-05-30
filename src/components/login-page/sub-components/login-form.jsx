import React, { useState } from "react";
import login from "../../DAL/api";
import InputEmail from "./input-email";
import InputPassword from "./input-password";

const LoginForm = () => {
  const [email, setEmail] = useState({ input: "", valid:false });
  const [password, setPassword] = useState({ input: "", valid: false });
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(email.input, password.input)
      ? setMessage(`Welcome ${email.input}`)
      : setMessage("Login details are invalid");

    setEmail({ input: "", valid: false });
    setPassword({ input: "", valid: false });
  }

  return (
    <div className="login">
      <div className="details">
        <ul>
          Valid users:
          <li>moshe@gmail.com, 123456</li>
          <li>s@s.s, 123123</li>
        </ul>
      </div>
      <h3>{message ? message : null}</h3>
      <form className="col-sm-10 col-xs-12 col-md-3 needs-validation" onSubmit={handleSubmit}>
        <InputEmail setEmail={setEmail} email={email} />
        <InputPassword setPassword={setPassword} password={password} />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!password.valid || !email.valid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
