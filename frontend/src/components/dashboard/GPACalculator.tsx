import { useState } from "react";
import OneTimeCalculator from "../calculators/OneTimeCalculator";
import SemesterCalculator from "../calculators/SemesterCalculator";
import YearCalculator from "../calculators/YearCalculator";


const GPACalculator = () => {
  const [mode, setMode] = useState('one-time');

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
    <main className="row-span-2 col-span-2">
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
    );
}
 
export default GPACalculator;