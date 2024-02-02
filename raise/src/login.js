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
    <div>
        <h2>Login</h2>
        <form>
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
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