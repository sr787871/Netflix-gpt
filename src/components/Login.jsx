import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValid } from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL, USER_URL } from '../utils/constants';


const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleClick = ()=>{
        setIsSignInForm(!isSignInForm)
    }  

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = ()=>{
        //form validation
        if(!isSignInForm){
            //sign  up
            const message = checkValid(name.current.value,email.current.value,password.current.value)
            // console.log(name.current.value);
            setErrorMessage(message)
            if(message) return;
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_URL})
                    .then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                    navigate('/browse');
                    
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " " + errorMessage)
            });
        }else{
            //sign in
            const message = checkValid(null,email.current.value,password.current.value)
            // console.log(name.current.value);
            setErrorMessage(message)
            if(message) return;
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/browse')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " " + errorMessage)
            });
        }
        
        

        // if(!isSignInForm){
        //     //sign up 
            
        // }else{
            
        // }
        //Now i can sign in
    }
    return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_IMG_URL} alt="" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className="font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/> }
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-400 font-bold text-lg p-2'>{errorMessage}</p>
            <button className='p-4 my-6 rounded-lg bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={handleClick}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."} </p>
        </form>
    </div>
  )
}

export default Login