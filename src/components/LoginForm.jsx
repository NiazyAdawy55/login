import React from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const LoginForm = () => {
    return (
      <div className='flex flex-1 justify-center align-middle'>
            <form >
                <h2>تسجيل الدخول</h2>

                <div>
                    <EmailInput/>
                    <PasswordInput/>
                </div>

            </form>
      </div>
    )
}

export default LoginForm