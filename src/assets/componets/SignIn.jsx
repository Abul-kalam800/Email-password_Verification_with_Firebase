import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebaseconfig/firebaseConfig';

const SignIn = () => {
    const  handelLoginForm=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
         const password =e.target.password.value;
        console.log(email,password)

        //createUser
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='mt-8'>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Sign-in now!</h1>
            </div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handelLoginForm} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default SignIn;