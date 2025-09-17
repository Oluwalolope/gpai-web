import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-icon.svg';


const UserLoginPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const USER_NAME = sessionStorage.getItem('userName');
    const USER_PASSWORD = sessionStorage.getItem('userPassword');

  const loginAction = (formData: FormData) => {
    const userName = formData.get('user-name');
    const password = formData.get('password');

    if (userName === USER_NAME && password === USER_PASSWORD) {
      // On success, set a flag in session storage and redirect
      sessionStorage.setItem('userName', `${userName}`);
      sessionStorage.setItem('gpai-user-auth', 'true');
      navigate('/user/dashboard');
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold font-poppins text-dark-text mb-8">Login</h1>

        {/* Set up Google Authentication */}
        <button className="w-full border border-primary  text-black font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all mb-9">
            <img src={googleIcon} alt="google icon" className='size-8 inline-block mr-2' />
            Continue with Google
        </button> 


        <p className="mb-5 text-sm text-stone-500 uppercase">or</p>

        <form action={loginAction}>
          <input
            type="text"
            name='user-name'
            placeholder="Enter username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
          />
          <input
            type="password"
            name='password'
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
            Login
          </button>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </form>
          <p className="mt-4 text-sm text-black">Don't have an account? <a href="/user/register" className="text-primary">Create account</a></p>

        <a href="/" className="text-stone-400 hover:text-black text-sm text-start block">Return Home</a>
      </div>
    </div>
  );
};

export default UserLoginPage;