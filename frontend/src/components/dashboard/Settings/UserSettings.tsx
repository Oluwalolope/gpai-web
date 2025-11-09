import AcademicSetting from "./AcademicSetting";
import ProfileSetting from "./ProfileSetting";
import UserPreference from "./UserPreference";
import HeaderDashboard from "../UI/HeaderDashboard";
import SidebarNavigation from "../UI/SidebarNavigation";
import { useNavigate } from "react-router-dom";

const UserSettings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("gpai-user-auth");
    navigate("/user/login");
  };

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />

        <section className={"col-span-4 row-span-2"}>
          <article className="py-3 px-5 gap-3 h-full w-full space-y-4">
            <ProfileSetting />
            <UserPreference />
            <AcademicSetting />
            <button
              onClick={handleLogout}
              className="font-medium text-red-500 hover:text-red-600"
              title="log out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default UserSettings;
