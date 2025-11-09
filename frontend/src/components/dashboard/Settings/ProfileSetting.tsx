import Avatar from "./Avatar";

const ProfileSetting = () => {
    const userName = sessionStorage.getItem('userName') || 'User';
    const userEmail = sessionStorage.getItem('userEmail') || 'user@example.com';


    return (
        <section className="rounded-xl border shadow-sm md:shadow-lg border-neutral-200 bg-white px-4 py-6 md:col-span-1 md:row-span-2">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Profile</h1>

            <div className="flex items-center gap-3 pb-2">
                <Avatar />
                <div>
                    <h3>{userName}</h3>
                    <p className="">{userEmail}</p>
                    <p className="">Babcock University</p>
                </div>
            </div>

            <h2 className="text-xl font-semibold font-poppins text-dark-text pb-4 capitalize">edit profile</h2>

            <div className="pb-2 space-y-2">
                <p className="font-poppins text-dark-text capitalize">full name</p>
                <input type="text" value={userName} className="w-full h-[40px] cursor-pointer m-2 ms-0 px-3 py-2 flex-1 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]" />
            </div>

            <div className="pb-2 space-y-2">
                <p className="font-poppins text-dark-text">Email</p>
                <input type="text" value={userEmail} className="w-full h-[40px] cursor-pointer m-2 ms-0 px-3 py-2 flex-1 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]" />
            </div>

            <div className="pb-2 space-y-2">
                <p className="font-poppins text-dark-text">Institution</p>
                <input type="text" value='Babcock University' className="w-full h-[40px] cursor-pointer m-2 ms-0 px-3 py-2 flex-1 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]" />
            </div>
        </section>
    );
}
 
export default ProfileSetting;