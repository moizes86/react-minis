import React, {useState} from 'react';
import LoginForm from './sub-components/login-form';

const LoginPage = ()=>{
    const [loginData, setLoginData] = useState({})

    return (
      <div className="login-page">
        <h1>LOGIN PAGE!</h1>
        <LoginForm setLoginData={setLoginData} />
      </div>
    );
}

export default LoginPage;