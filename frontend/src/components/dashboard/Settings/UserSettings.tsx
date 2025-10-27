import AcademicSetting from "./AcademicSetting";
import ProfileSetting from "./ProfileSetting";
import UserPreference from "./UserPreference";
import HeaderDashboard from "../UI/HeaderDashboard";
import SidebarNavigation from "../UI/SidebarNavigation";

const UserSettings = () => {

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />
        
        <section className={'col-span-4 row-span-2'}>
            <article className="py-3 px-5 gap-3 h-full w-full space-y-4">
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