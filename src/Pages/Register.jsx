import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser, updateUser }=use(AuthContext)
   const [nameError, setNameError] = useState("")

    //  use navigation
    const navigate = useNavigate()

  const handleRegister=(e)=>{
    // name validation
    
    e.preventDefault()
    console.log("form submitted", e.target)
    const form = e.target
    const name = form.name.value;

    if(name.length < 5){
      setNameError("Name should be more than 5 character")
      return;
    }
    else{
      setNameError("")
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password)
   
    // register page ar create user k call
   createUser(email, password)

   .then(result=>{
    const user= result.user
    updateUser({
      displayName: name,
      photoURL: photoUrl
    }).then(() => {
      setUser({...user,displayName: name,
      photoURL: photoUrl});
      // navigate kore home page a patano
      navigate("/")
   })
   .catch((error) => {
     console.log(error.message)
     setUser(user)
    });
    // console.log(user)
    
   })
   .catch(error=>{
    console.log(error.message)
    alert(error.message)
   })

  }

   

  return (
   <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>

      <form onSubmit={handleRegister} className="card-body">

        <fieldset className="fieldset">

          {/* Name */}
          <label className="label">Name</label>
          <input 
          type="text" 
          className="input" 
          name='name'
          placeholder="Your Name" required />
          {
            nameError && <p className='text-secondary text-xs'>{nameError}</p>
          }
          
          {/* Photo Url */}
          <label className="label">Photo Url</label>
          <input 
          type="text" 
          className="input" 
          name='photoUrl'
          placeholder="Your Photo Url" required />
          {/* Email */}
          <label className="label">Email</label>
          <input 
          type="email"
          className="input" 
          name='email'
          placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input 
          type="password"
          className="input" 
          name='password'
          placeholder="Password" required/>


          
          {/* register button */}
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='font-semibold text-center mt-5'>All Ready Have An Account ? <Link className='text-secondary' to='/auth/login/'>Login</Link></p>
      </form>
    </div>
    </div>
  );
};

export default Register;