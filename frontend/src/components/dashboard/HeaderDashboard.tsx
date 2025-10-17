import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/gpai-logo.svg';
import MobileNavigation from './MobileNavigation';


const HeaderDashboard = () => {
    // const userName = sessionStorage.getItem('userName') || 'User';

    const navigate = useNavigate();
    const location = useLocation() ;

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     sessionStorage.removeItem("gpai-user-auth");
    //     navigate("/user/login");
    // };



    return (
        <header className="bg-white sticky top-0 z-20 max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center md:hidden">
          <MobileNavigation />
          <img src={logo} alt="GPAI logo" className="w-20 inline-block" />
          <div className="flex gap-5">
            <button onClick={() => navigate('/user/dashboard/settings')} className={`flex rounded-md text-slate-600 gap-2 px-4 py-3 ${location.pathname === '/user/dashboard/settings' && 'bg-slate-600 text-white'}`}>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      {/* <h1 className="text-xl font-bold font-poppins text-white">
                        {userName}
                      </h1> */}
                    </div>
              </button>
  
            {/* <button
              onClick={handleLogout}
              className="font-medium text-primary hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
  
            </button> */}
  
          </div>
      </header>
    );
}
 
export default HeaderDashboard;