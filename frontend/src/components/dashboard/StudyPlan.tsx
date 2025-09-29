import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";

const StudyPlan = () => {
  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      {/* Header */}
      <HeaderDashboard />

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        {/* Desktop Navigation */}
        <aside className="bg-white hidden md:block  md:row-span-2 ">
          <SidebarNavigation openTab="study-plan" />
        </aside>
        <section className={'col-span-4 row-span-2'}>
            <h1 className="text-2xl font-bold font-poppins text-dark-text">Study Plan</h1>
          
        </section>
     </main>
          
      {/* <MobileNavigation openTab={openTab} updateOpenTab={handleUpdateOpenTab} /> */}
    </div>
  );
}
 
export default StudyPlan;