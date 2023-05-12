import './login.scss';



export default function Login() {
    return (
        <div className='login-page'>
            <div className='welcoming'>
                <h1>facebook</h1>
                <h3>
                    Connect with friends and the world
                    around you on Facebook.
                </h3>
            </div>
            <div className='form-wrapper'>
                <form>
                    <div className='input-field'>
                        <input type='email' placeholder='Email' required />
                    </div>
                    <div className='input-field'>
                        <input type='password' placeholder='Password' required />
                    </div>
                    <button>Log in</button>
                </form>
            </div>
        </div>
    );
};