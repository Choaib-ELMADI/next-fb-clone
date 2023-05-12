'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 

import { auth, provider, db } from '@/config/firebase';
import './login.scss';



export default function Login() {
    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                return user;
            })
            .then((user) => {
                addDoc(collection(db, "users"), {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                });
            })
            .catch((err) => {
                console.error(err);
            })
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((userCredentials) => {
                const user = userCredentials.user;
                return user;
            })
            .then((user) => {
                addDoc(collection(db, "users"), {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='login-page'>
            <div className='welcoming'>
                <h1>facebook</h1>
                <p>
                    Avec Facebook, partagez et restez en 
                    contact avec votre entourage.
                </p>
            </div>
            <div className='form-wrapper'>
                <form onSubmit={ handleSubmitForm }>
                    <input 
                        name='email'
                        type='email' 
                        placeholder='Email' 
                        onChange={ handleChange }
                        required 
                    />
                    <input 
                        name='password'
                        type='password' 
                        placeholder='Password' 
                        onChange={ handleChange }
                        required 
                    />
                    <button type='submit'>Se connecter</button>
                </form>

                <div className='line' />

                <button
                    onClick={ signInWithGoogle }
                >
                    <FcGoogle size={ 25 } />
                    Se connecter avec Google
                </button>
            </div>
        </div>
    );
};