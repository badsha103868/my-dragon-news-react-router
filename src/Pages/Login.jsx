import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
           {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          {/* Forget password */}
          <div><a className="link link-hover">Forgot password?</a></div>
          {/* login button */}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='font-semibold text-center mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register/'>Register</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Login;