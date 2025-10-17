import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";

const StudyPlan = () => {
  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />

        <section className={'col-span-4 row-span-2'}>
            <h1 className="text-2xl font-bold font-poppins text-dark-text">Study Plan</h1>
          
        </section>
     </main>
    </div>
  );
}
 
export default StudyPlan;