import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebaseconfig/firebaseConfig';
import { Link } from 'react-router';

const Login = () => {
    const emailRef = useRef();
    const [succes, setSucces] = useState('')
    const [errmessage, setErrmessage] = useState('');
    const loginHandle = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        //  reset errmessage 
        setErrmessage(' ')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                if (!result.user.emailVerified) {
                    alert('Plese verified your email')
                } else {

                    setSucces(true)
                }



            })
            .catch(err => {
                setErrmessage(err.message);
            })

    }

    const forgetHandelar = () => {
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        setErrmessage(' ')
         sendPasswordResetEmail(auth,email)
         .then(()=>{
            alert('A password reset send your email checked set new password')
         })
         .catch(error=>{
            setErrmessage(error.message)
         })

    }
    return (
        <>

            <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-8">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={loginHandle} className="form">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' ref={emailRef} placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />

                        <div onClick={forgetHandelar}><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                        <p>New to this website? please <Link to='/sign-in'><small className='text-blue-500 underline'>Sign-in</small></Link> or <Link to='/register' ><small className='text-blue-500 underline'>Register</small></Link></p>
                    </form>
                    {
                        errmessage && <p className='text-red-600'>{errmessage}</p>
                    }
                    {
                        succes && <p className='text-green-500'>User successfully logged in</p>
                    }
                </div>
            </div>

        </>
    );
};

export default Login;