import React, { useState } from 'react';
import './signup.css';


const SignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignup = () => {
        console.log('Signup clicked with name:', fullName, 'email:', email, 'and password:', password);
    };

    return (
        <div className='signupbody'>
            <h2>Sign up</h2>
            <form className='signupform'>
                <label className='signuplabel'>
                    Full Name:
                    <input className='signupinput' type="text" value={fullName} onChange={handleFullNameChange} />
                </label>
                <br />
                <label className='signuplabel'>
                    Email:
                    <input className='signupinput' type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label className='signuplabel'>
                    Password:
                    <input className='signupinput' type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button className='signupbutton'type="button" onClick={handleSignup}>
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default SignupPage;