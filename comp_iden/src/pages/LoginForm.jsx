import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './LoginForm.css';

import { TbShieldLockFilled } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa6";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    let authorized;

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const isValidEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if (!isValidEmail()) {
            window.alert("Enter a Valid Email");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
            });

            const authorized = response.data;
            
            if(authorized)
            {
                alert("Logged in successfully !");
                let currentuser = email;
                navigate('/home');
            }
            else{
                alert("Login Attempt failed !")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='overall-login'>
                <div className='wrapper'>
                    <form>
                        <h1>Poll Wise</h1>
                        <div className="input-box">
                            <input
                                type='text'
                                placeholder='Email ID'
                                required
                                value={email}
                                onKeyDown={handleKeyPress}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaUserAstronaut className='FaIcon'/>
                        </div>
                        <div className="input-box">
                            <input
                                type='password'
                                placeholder='Password'
                                required
                                value={password}
                                onKeyDown={handleKeyPress}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TbShieldLockFilled className='FaIcon'/>
                        </div>
                        <button type='button' onClick={handleLogin}>Login</button>
                        <div className="register-link">
                            <a href="/forgotpwd">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
