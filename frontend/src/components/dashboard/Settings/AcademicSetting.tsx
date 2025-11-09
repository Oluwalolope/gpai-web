import { useContext } from "react";
import UserDashboardContext from "../../../store/UserDashboardContext";
import GradeScaleSelectMenu from "./GradingScaleSelectMenu";
import { useNavigate } from "react-router-dom";


const AcademicSetting = () => {
    const userDashboardCtx = useContext(UserDashboardContext);
    const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("gpai-user-auth");
    navigate("/user/login");
  };
    return (
        <section className="md:col-span-1 md:row-span-2 rounded-xl border shadow-sm md:shadow-lg border-neutral-200 bg-white px-4 py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Academic</h1>

            {/* Academic */}
            <div className="flex flex-row gap-x-6">
                <div className="pb-3 flex-1">
                    <p className="font-poppins text-dark-text pb-2">Grading Scale</p>
                    <GradeScaleSelectMenu />
                </div>

                <div className="flex-1">
                    <p className="font-poppins text-dark-text pb-2">Target GPA</p>
                    <input type="text" inputMode="numeric" placeholder="5.00" className="w-full h-[40px] cursor-pointer m-2 ms-0 px-3 py-2 flex-1 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]" onChange={(e) => userDashboardCtx.handleTargetCGPAChange(e)} value={userDashboardCtx.targetCGPA? userDashboardCtx.targetCGPA : ''} />
                </div>
            </div>
            <button
              onClick={handleLogout}
              className="font-medium text-red-500 hover:text-red-600 mt-6"
              title="log out"
            >
              <p className="flex flex-row gap-1 items-center">
                <span>Logout</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
              </p>
            </button>
        </section>
    );
}
 
export default AcademicSetting;