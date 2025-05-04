import { createUserWithEmailAndPassword, sendEmailVerification, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebaseconfig/firebaseConfig';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState('');
    const handleRegister = (e) => {
        e.preventDefault()
        const name =e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const trams = e.target.checkbox.checked;
        console.log(email, password, trams)

        setSucces(false);
        setErrMsg('');
        //  passwoed validation 
        const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (passwordExp.test(password) === false) {
            setErrMsg('Password must one uppercase charctor,one lowercase and one number and at least 6 charctor');
            return;
        }

        if (!trams) {
            setErrMsg('Pleas checked out trams and conditions agree')
            return;
        }
        //    creat user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);

                // email verification 
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setSucces(true);
                    })

                    // updated user profiel 

                    const profile ={
                        displayName: name,
                        photoURL:photo
                    }

                    updateProfile(auth.currentUser,profile).then(()=>{
                        alert('Updated your profile')
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
                setErrMsg(err.message)
            })

    }

    return (
        <div className=' max-w-sm  mx-auto mt-3 rounded-2xl shadow-2xl'>
            <h1 className='text-5xl my-5 text-center font-bold'>Register Now!</h1>
            <div className='card bg-dark-600'>
                <form onSubmit={handleRegister} className='space-y-3'>
                    <label>Name</label><br />
                    <input type="text" name="name" className='input' placeholder='Name' /><br />
                    <label>Photo URL</label><br />
                    <input type="text" name="photo" className='input' placeholder='Photo-URL' /><br />
                    <label>Email</label><br />
                    <input type="email" name="email" className='input' placeholder='Email' /><br />
                    <label>Password</label><br />

                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'} name='password' className='input outline-none' placeholder='Password' /><br />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute top-3 right-18 cursor-pointer'>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    <label className='label'>
                        <input type="checkbox" name="checkbox" className='mr-2' />
                        <small> Trams and conditions</small></label>
                    <button type='submit' className='btn w-full bg-black py-2'>Submit</button>
                    <p>Already have account? Please go to <NavLink to="/login" className="text-blue-600 text-sm">Login</NavLink></p>
                </form>
                {
                    errMsg && <p className='text-red-600'>{errMsg}</p>
                }
                {
                    succes && <p className='text-green-600'>Users created succesfully</p>
                }
            </div>
        </div>
    );
};

export default Register;