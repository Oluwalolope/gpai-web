import AcademicSetting from "./Settings/AcademicSetting";
import ProfileSetting from "./Settings/ProfileSetting";
import UserPreference from "./Settings/UserPreference";
import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";

const UserSettings = () => {

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />
        
        <section className={'col-span-4 row-span-2'}>
            <article className="bg-white shadow-sm border my-3 rounded-lg px-5 w-full">
                <ProfileSetting />
                <UserPreference />
                <AcademicSetting />
            </article>
        </section>
     </main>
    </div>
  );
        
}
 
export default UserSettings;