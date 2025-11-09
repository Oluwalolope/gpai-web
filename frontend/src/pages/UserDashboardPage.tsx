/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarNavigation from "../components/dashboard/UI/SidebarNavigation";
import GPASnapshotCard from "../components/dashboard/mainDashboard/GPASnapshotCard";
import GPAAnalyticsCard from "../components/dashboard/mainDashboard/GPAAnalyticsCard";
import AiAssistantCard from "../components/dashboard/mainDashboard/AiAssistantCard";
import ForecasterCard from "../components/dashboard/mainDashboard/ForecasterCard";
import HeaderDashboard from "../components/dashboard/UI/HeaderDashboard";


const UserDashboardPage = () => {
  return (
    <div className="min-h-dvh bg-slate-50  pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="mx-auto min-h-dvh max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />

        <section className={'md:col-span-4 md:row-span-2 flex flex-col py-4 md:grid gap-2 md:grid-cols-2 md:grid-rows-2 md:pe-4 md:py-8'}>
          <GPASnapshotCard />
          <AiAssistantCard />
          <GPAAnalyticsCard />
          <ForecasterCard />
        </section>
     </main>
    </div>
  );
};

export default UserDashboardPage;
