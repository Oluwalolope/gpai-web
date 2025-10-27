import { AnimatePresence, motion } from "framer-motion";
import RemainingCourses from "./RemainingCourses";
import HeaderDashboard from "../UI/HeaderDashboard";
import SidebarNavigation from "../UI/SidebarNavigation";
import ForecasterOutput from "./ForecasterOutput";
import { useContext, useState } from "react";
import { calculateFinalCGPA } from "../util/calculations";
import UserDashboardContext from "../../../store/UserDashboardContext";


const Forecaster = () => {
  const [hasUserForecasted, setHasUserForecasted] = useState<boolean>(false);
  const userDashboardCtx = useContext(UserDashboardContext);

  const gpaScale = 5.0;
  const calculatedCGPA = calculateFinalCGPA(userDashboardCtx.courseHistory);

  const handleForecast = () => {
    setHasUserForecasted(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' //smooth scrolling
      });
    } , 200)
  }

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />

        <motion.section initial={{ opacity: 0, y: 10}} animate={{opacity: 1, y: 0, transition: { duration: 0.5}}}  className={'col-span-4 row-span-2 bg-white/80 backdrop-blur-xl rounded-3xl h-full md:h-[95dvh] md:max-h-[700px] mt-4 px-4 py-2 sm:p-8 shadow-2xl shadow-purple-500/10 border border-white/50 gap-3'}>
            <h1 className="capitalize text-2xl font-semibold font-inter text-neutral-800 text-center">build your GPA <span className="bg-gradient-to-r from-blue-400  to-[#007FEF] bg-clip-text text-transparent">strategy</span></h1>
            <div className="w-full h-full flex flex-col md:flex-row-reverse">
              {/* Forecaster output */}
              <AnimatePresence>
                {hasUserForecasted && <ForecasterOutput forecastedAverageGrade="A" />}
              </AnimatePresence>

              {/* Forecaster input */}
              <div className="flex-1 px-10 py-5">

                <div className="h-[35%]">
                  <h2 className="text-xl font-medium font-poppins capitalize mb-3">Set your goals</h2>
                  {/* current GPA */}
                  <div className="flex flex-row gap-3 px-2 justify-between items-center rounded-lg h-[50px] shadow-lg shadow-black/10 border border-white/50 mb-3">
                    <label htmlFor="currentGPA" className="text-md font-normal font-inter capitalize">Current CGPA</label>
                    <div className="max-w-12 h-[70%] rounded-lg py-1 px-1 bg-slate-100/20">{calculatedCGPA? calculatedCGPA : 'N/A'}</div>
                  </div>
                  
                  {/* target GPA */}
                  <div className="flex flex-row gap-3 px-2 justify-between items-center rounded-lg h-[50px] shadow-lg shadow-black/10 border border-white/50 mb-3">
                    <label htmlFor="targetGPA" className="text-md font-normal font-inter capitalize">Target CGPA</label>
                    <input name="targetGPA" id="targetGPA" type="text" typeof="numeric" placeholder="5.00" max={gpaScale} onChange={userDashboardCtx.handleTargetCGPAChange} value={userDashboardCtx.targetCGPA? userDashboardCtx.targetCGPA : ''} className="max-w-12 h-[70%] rounded-lg py-1 px-1 bg-slate-100/20" />
                  </div>
                </div>

                <RemainingCourses handleForecast={handleForecast} />

              </div>
            </div>
          
        </motion.section>
     </main>
    </div>
  );
}
 
export default Forecaster;