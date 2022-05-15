import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'> 
        <div className='loginInfo' >
            <h1> SH 75 DASHBOARD </h1>
            <p> Login as an admin to view your dashboard </p>
        </div>
        <div>
            <form className='loginForm '>
                    <label> Email </label>
                    <input type='email' placeholder='Enter you email' />
                
                    <label> Password </label>
                    <input type='text' placeholder='Enter your password' />

                <div><button> Log in </button></div>
            </form>
        </div>
    </div>
  )
}
