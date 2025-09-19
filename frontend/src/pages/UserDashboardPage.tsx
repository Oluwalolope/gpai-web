/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OneTimeCalculator from "../components/calculators/OneTimeCalculator";
import SemesterCalculator from "../components/calculators/SemesterCalculator";
import YearCalculator from "../components/calculators/YearCalculator";


const UserDashboardPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('one-time');

  const userName = sessionStorage.getItem('userName') || 'User';

  const handleLogout = () => {
    sessionStorage.removeItem("gpai-user-auth");
    navigate("/user/login");
  };

  const renderCalculator = () => {
    switch (mode) {
      case "one-time":
        // For now, we'll use a placeholder, but you can swap this with your real calculator
        return <OneTimeCalculator />;
      case "semester":
        return <SemesterCalculator />;
      case "year":
        return <YearCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-poppins text-dark-text">
            Welcome, {userName}
          </h1>
          <button
            onClick={handleLogout}
            className="font-medium text-primary hover:text-blue-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold font-poppins text-dark-text">GPAi User Dashboard</h2>
            {/* This is a place holder for a history component */}
            <p className="ml-4 hover:text-blue-700 cursor-pointer">History</p>
        </div>
        <menu className="flex border border-primary rounded-lg w-full max-w-[600px] mx-auto mt-8 mb-8">
            <button className={`w-1/3 font-bold rounded-tl-lg rounded-bl-lg px-3 py-2 text-gray-700 hover:bg-primary hover:text-white ${mode === "one-time" ? "bg-primary text-white" : ""}`} onClick={() => setMode("one-time")}>One-Time Calculator</button>
            <button className={`w-1/3 font-bold  px-3 py-2 text-gray-700 hover:bg-primary hover:text-white ${mode === "semester" ? "bg-primary text-white" : ""}`} onClick={() => setMode("semester")}>Semester Calculator</button>
            <button className={`w-1/3 font-bold rounded-tr-lg rounded-br-lg px-3 py-2 text-gray-700 hover:bg-primary hover:text-white ${mode === "year" ? "bg-primary text-white" : ""}`} onClick={() => setMode("year")}>Year Calculator</button>
        </menu>
        {mode && 
            <div className="text-center mb-12">
                {/* Header for the tools section */}
                <h3 className="text-lg font-semibold text-gray-700">GPAi {mode?.replace("-", " ")} Calculator</h3>
                {/* Render the selected calculator */}
                {renderCalculator()}
            </div>
        }
      </main>
      {/* This is the AI assistant feature to be added */}
      <div className="fixed bottom-3 right-7 z-10 flex max-w-sm items-center gap-x-4 rounded-full bg-white p-4 shadow-lg cursor-pointer outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <p className="text-2xl">🤖</p>
     </div>
    </div>
  );
};

export default UserDashboardPage;
