import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-icon.svg';
import logo from '../assets/gpai-logo.svg';
import graphic from '../assets/bg-graphic.png';


const UserLoginPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const USER_NAME = sessionStorage.getItem('userName');
    const USER_EMAIL = sessionStorage.getItem('userEmail');
    const USER_PASSWORD = sessionStorage.getItem('userPassword');

  const loginAction = (formData: FormData) => {
    const userIdentifier = formData.get('user-identifier');
    const password = formData.get('password');

    if ((userIdentifier === USER_NAME || userIdentifier === USER_EMAIL) && password === USER_PASSWORD) {
      // On success, set a flag in session storage and redirect
      sessionStorage.setItem('user', `${userIdentifier}`);
      sessionStorage.setItem('gpai-user-auth', 'true');
      navigate('/user/dashboard');
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <a href="/" className="text-stone-400 hover:text-black text-sm text-start">
          <img src={logo} alt="Logo" className='w-20 inline-block' />
      </a>
      <div className='flex items-center w-full max-w-[1000px] justify-around mx-auto'>
        <div className='flex-1 hidden md:block'>
          <h1 className='text-5xl font-bold font-poppins text-dark-text mb-8'>Sign in to</h1>
          <h2 className='text-3xl font-bold font-poppins text-dark-text mb-8'>Enjoy your AI-powered academic tool</h2>
          <p className="mt-4 text-sm font-poppins text-black inline-block"> If you don't have an account <br />You can <a href="/user/register" className="text-primary">Register here!</a></p>
          <img src={graphic} className='inline-block h-60' />
        </div>
        <div className="p-8 w-full max-w-md text-center flex-1">
          <h3 className="text-3xl font-bold font-poppins text-dark-text mb-8 block text-start">Sign in</h3>


          <form action={loginAction}>
            <input
              type="text"
              name='user-identifier'
              placeholder="Enter email or username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
            />
            <input
              type="password"
              name='password'
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
            />
            <a href="#" className='text-stone-400 hover:text-black text-sm text-end block mb-4'>Forgot password?</a>
            <button
              type="submit"
              className="w-full bg-primary text-white font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
              Login
            </button>
              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          </form>
          <p className="mt-4 text-sm font-poppins text-black inline-block md:hidden">Don't have an account? <a href="/user/register" className="text-primary">Register here!</a></p>
          <p className="my-5 text-sm text-stone-500">or</p>
          {/* Set up Google Authentication */}
          <button className="w-full border border-primary  text-black font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all mb-9">
              <img src={googleIcon} alt="google icon" className='size-8 inline-block mr-2' />
              Continue with Google
          </button> 





        </div>
          
      </div>  
    </div>
  );
};

export default UserLoginPage;