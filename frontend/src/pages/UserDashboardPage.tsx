/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarNavigation from "../components/dashboard/SidebarNavigation";
import GPASnapshotCard from "../components/dashboard/GPASnapshotCard";
import GPAAnalyticsCard from "../components/dashboard/GPAAnalyticsCard";
import AiAssistantCard from "../components/dashboard/AiAssistantCard";
import StudyScheduleCard from "../components/dashboard/StudyScheduleCard";
// import MobileNavigation from "../components/dashboard/MobileNavigation";
import HeaderDashboard from "../components/dashboard/HeaderDashboard";


const UserDashboardPage = () => {
  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      {/* Header */}
      <HeaderDashboard />

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        {/* Desktop Navigation */}
        <aside className="bg-white hidden md:block  md:row-span-2 ">
          <SidebarNavigation openTab="dashboard" />
        </aside>
        <section className={'col-span-4 row-span-2 overflow-x-hidden grid gap-2 md:grid-cols-2 md:grid-rows-2 md:pe-4 sm:pe-6 lg:pe-8'}>
          <GPASnapshotCard targetGPA={'4.50'} />
          <AiAssistantCard />
          <GPAAnalyticsCard />
          <StudyScheduleCard />
        </section>
     </main>
          
      {/* <MobileNavigation openTab={openTab} updateOpenTab={handleUpdateOpenTab} /> */}
    </div>
  );
};

export default UserDashboardPage;
