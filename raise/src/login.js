import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {

    console.log('Login clicked with email:', email, 'and password:', password);
};

return (
    <div className='loginbody'>
        <h2>Login</h2>
        <form className='loginform'>
        <label className='loginlabel'>
            Email:
            <input className='logininput'type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className='loginlabel'>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
            Login
        </button>
        </form>
    </div>
    );
};

export default LoginPage;