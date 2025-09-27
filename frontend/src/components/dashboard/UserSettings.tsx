import AcademicSetting from "./Settings/AcademicSetting";
import ProfileSetting from "./Settings/ProfileSetting";
import UserPreference from "./Settings/UserPreference";

const UserSettings = () => {
    return (
        <article className="bg-white shadow-sm border my-3 rounded-lg px-5 w-full">
            <ProfileSetting />
            <UserPreference />
            <AcademicSetting />
        </article>
    );
}
 
export default UserSettings;