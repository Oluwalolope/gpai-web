import { useContext } from "react";
import UserDashboardContext from "../../../store/UserDashboardContext";
import GradeScaleSelectMenu from "./GradingScaleSelectMenu";

const AcademicSetting = () => {
    const userDashboardCtx = useContext(UserDashboardContext);
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
        </section>
    );
}
 
export default AcademicSetting;