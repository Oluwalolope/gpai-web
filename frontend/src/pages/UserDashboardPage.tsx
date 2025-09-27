/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/gpai-logo.svg';
import SidebarNavigation from "../components/dashboard/SidebarNavigation";
import GPASnapshotCard from "../components/dashboard/GPASnapshotCard";
import GPAAnalyticsCard from "../components/dashboard/GPAAnalyticsCard";
import AiAssistantCard from "../components/dashboard/AiAssistantCard";
import StudyScheduleCard from "../components/dashboard/StudyScheduleCard";
import GPACalculator from "../components/dashboard/GPACalculator";
import UserSettings from "../components/dashboard/UserSettings";
import MobileNavigation from "../components/dashboard/MobileNavigation";


const UserDashboardPage = () => {
  const [openTab, setOpenTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleUpdateOpenTab = (tab: string) => {
    setOpenTab(tab)
  }

  const userName = sessionStorage.getItem('userName') || 'User';

  const handleLogout = () => {
    sessionStorage.removeItem("gpai-user-auth");
    navigate("/user/login");
  };



  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-20 max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <img src={logo} alt="GPAI logo" className="w-20 inline-block" />
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold font-poppins text-dark-text">
                {userName}
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>

            <button
              onClick={handleLogout}
              className="font-medium text-primary hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>

            </button>

          </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        {/* Desktop Navigation */}
        <aside className="bg-white hidden md:block  md:row-span-2 ">
          <SidebarNavigation openTab={openTab} updateOpenTab={handleUpdateOpenTab} />
        </aside>
        <section className={`col-span-4 row-span-2 overflow-x-hidden ${openTab == 'dashboard' && 'grid gap-2 md:grid-cols-2 md:grid-rows-2 md:pe-4 sm:pe-6 lg:pe-8'}`}>
          { openTab == 'dashboard' && <>
            <GPASnapshotCard />
            <AiAssistantCard />
            <GPAAnalyticsCard />
            <StudyScheduleCard />
          </>}
          { openTab == 'gpa-calculator' && <GPACalculator />}
          { openTab == 'settings' && <UserSettings />}
        </section>
     </main>
        
      <MobileNavigation openTab={openTab} updateOpenTab={handleUpdateOpenTab} />
    </div>
  );
};

export default UserDashboardPage;
