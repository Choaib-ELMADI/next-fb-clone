'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { auth, provider } from '@/config/firebase';
import './login.scss';



export const metadata = {
    title: 'Facebook - Connexion ou inscription',
};

export default function Login() {
    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredentials.user;
            console.log("User: ", user);
        }
        catch(err) {
            console.error(err);
        }
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Google User: ", user.email);
            }).catch((err) => {
                console.error(err);
            });
    };

    { console.log("Current User: ", auth?.currentUser?.email); }

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