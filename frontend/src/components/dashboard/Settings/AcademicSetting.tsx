import { useContext } from "react";
import MarkingScheme from "./MarkingScheme";
import UserDashboardContext from "../../../store/UserDashboardContext";

const AcademicSetting = () => {
    const userDashboardCtx = useContext(UserDashboardContext);
    return (
        <section className="md:col-span-1 md:row-span-2 rounded-xl border shadow-sm md:shadow-lg border-neutral-200 bg-white px-4 py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Academic</h1>

            {/* Academic */}
            <div className="flex flex-col gap-2">
                <div className="pb-3 flex-1">
                    <p className="font-poppins text-dark-text pb-2">Grading Scale</p>
                    <select name="gradingScale" id="gradingScale" className="w-full cursor-pointer px-3 py-2 flex-1 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary">
                        <option value="4">4.0 Scale</option>
                        <option value="5">5.0 Scale</option>
                        <option value="7">7.0 Scale</option>
                        <option value="10">10.0 Scale</option>
                    </select>
                </div>

                <div className="flex-1">
                    <p className="font-poppins text-dark-text pb-2">Target GPA</p>
                    <input type="text" inputMode="numeric" placeholder="5.00" className="w-full cursor-pointer px-3 py-2 flex-1 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-primary" onChange={(e) => userDashboardCtx.handleTargetCGPAChange(e)} value={userDashboardCtx.targetCGPA? userDashboardCtx.targetCGPA : ''} />
                </div>
            </div>

            <div className="border-t border-slate-200 mt-4 pt-4">
                <h2 className="text-2xl font-bold font-poppins text-dark-text pb-4 capitalize">marking scheme</h2>
                <MarkingScheme handleForecast={() => console.log('yo')} />
            </div>

        </section>
    );
}
 
export default AcademicSetting;