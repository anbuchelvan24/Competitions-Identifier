import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './LoginForm.css';

import { TbShieldLockFilled } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa6";

const LoginForm = ({loginProps}) => {

    const {email, password, setEmail, setPassword, handleLogin} = loginProps
    
    console.log(handleLogin)
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
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
