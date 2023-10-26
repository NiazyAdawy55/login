import React from 'react'
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';

const PasswordInput = () => {

    const [passwordType, setPasswordType] = useState('password');

    const handleShowPassword = ()=>{

    }

    return (
        <div className='form-control'>
            <input type={passwordType} name="password"  />
            <button className=''><AiFillEye/></button>
        </div>
    )
}

export default PasswordInput