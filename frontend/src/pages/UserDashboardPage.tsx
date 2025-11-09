/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarNavigation from "../components/dashboard/UI/SidebarNavigation";
import GPASnapshotCard from "../components/dashboard/mainDashboard/GPASnapshotCard";
import GPAAnalyticsCard from "../components/dashboard/mainDashboard/GPAAnalyticsCard";
import AiAssistantCard from "../components/dashboard/mainDashboard/AiAssistantCard";
import ForecasterCard from "../components/dashboard/mainDashboard/ForecasterCard";
import HeaderDashboard from "../components/dashboard/UI/HeaderDashboard";


const UserDashboardPage = () => {
  return (
    <div className="min-h-dvh bg-slate-50  pb-16 md:pb-0  lg:flex lg:flex-col">
      <HeaderDashboard />

      <main className="mx-auto min-h-dvh max-w-7xl px-4 lg:px-0 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-4 lg:flex-1">
        <SidebarNavigation />

        <section className={'lg:col-span-4 lg:row-span-2 flex flex-col py-4 lg:grid gap-2 lg:grid-cols-2 lg:grid-rows-2 lg:pe-4 lg:py-8'}>
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
