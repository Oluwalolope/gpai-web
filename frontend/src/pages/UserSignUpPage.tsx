import { useNavigate } from "react-router-dom";
import { useState } from "react";
import googleIcon from '../assets/google-icon.svg';


const UserSignUpPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const signUpAction = (formData: FormData) => {
    const userName = formData.get('user-name');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    if (password == confirmPassword) {
      sessionStorage.setItem('userName', `${userName}`);
      sessionStorage.setItem('userPassword', `${password}`);
      sessionStorage.setItem('gpai-user-auth', 'true');
      setError('');
      navigate('/user/dashboard');
    } else {
      setError('The password must match');
    }
  }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold font-poppins text-dark-text mb-2">Create an account</h1>
                <p className="text-light-text mb-8">Please fill in the details to create an account.</p>
                {/* Set up Google Authentication */}
                <button className="w-full border border-primary  text-black font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all mb-9">
                    <img src={googleIcon} alt="google icon" className='size-8 inline-block mr-2' />
                    Continue with Google
                </button> 


                <p className="mb-5 text-sm text-stone-500 uppercase">or</p>

                <form action={signUpAction}>
                    <input
                        type="text"
                        name='user-name'
                        required
                        placeholder="Enter username"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
                    />
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Enter password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
                    />
                    <input
                        type="password"
                        name='confirm-password'
                        required
                        placeholder="Re-enter password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-poppins font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Register
                    </button>
                    {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                </form>
                <p className="mt-4 text-sm text-black">Already have an account? <a href="/user/login" className="text-primary">Login</a></p>
            </div>
        </div>
    );
}
 
export default UserSignUpPage;