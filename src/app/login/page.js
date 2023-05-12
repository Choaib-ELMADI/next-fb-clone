import { FcGoogle } from 'react-icons/fc';

import './login.scss';



export const metadata = {
    title: 'Facebook - Connexion ou inscription',
};

export default function Login() {
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
                <form>
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <button type='submit'>Se connecter</button>
                </form>
                <div className='line' />
                <button>
                    <FcGoogle size={ 25 } />
                    Se connecter avec Google
                </button>
            </div>
        </div>
    );
};