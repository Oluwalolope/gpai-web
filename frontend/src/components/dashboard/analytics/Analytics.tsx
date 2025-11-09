import LineGraph from "./graph/LineGraph";
import HeaderDashboard from "../UI/HeaderDashboard";
import SidebarNavigation from "../UI/SidebarNavigation";
import { useContext } from "react";
import UserDashboardContext from "../../../store/UserDashboardContext";
import SessionAnalytics from "./components/SessionAnalytics";

const Analytics = () => {
    const userDashboardCtx = useContext(UserDashboardContext);
      return (
        <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
          <HeaderDashboard />
    
          <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
            <SidebarNavigation />
            
            <section className={'col-span-4 row-span-2'}>      
                <article className="bg-white shadow-sm border my-3 rounded-lg px-5 w-full">
                    <h1 className="text-2xl font-bold font-poppins text-dark-text py-3">Analytics</h1>

                    <h2 className="text-2xl font-bold font-poppins text-dark-text py-3 uppercase">cgpa growth</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LineGraph />
                    </div>

                    {/* SGPA Caurosel */}
                    <h2 className="text-2xl font-bold font-poppins text-dark-text py-3 uppercase">sgpa</h2>


                    <div className="flex flex-wrap gap-2 mt-8 mb-5">
                        {userDashboardCtx.courseHistory.map((session) => <SessionAnalytics key={session.id} {...session} />)}
                    </div>
                </article>
            </section>
         </main>
        </div>
      );
}
 
export default Analytics;