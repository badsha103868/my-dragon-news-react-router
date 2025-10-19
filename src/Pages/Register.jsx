import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
   <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" />
          {/* Photo Url */}
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Your Photo Url" />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />


          
          {/* register button */}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='font-semibold text-center mt-5'>All Ready Have An Account ? <Link className='text-secondary' to='/auth/login/'>Login</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Register;