import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1>Admin Panel</h1>
            <form>
                <div>
                    <p>Email Address</p>
                    <input type="email"  placeholder="Your@email.com" required/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="Password"  placeholder="Enter your Password" required/>
                </div>
                <button type='submit'>login</button>
            </form>
        </div>
    </div>
  )
}

export default Login