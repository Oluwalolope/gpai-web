const ProfileSetting = () => {
    const userName = sessionStorage.getItem('userName') || 'User';
    const userEmail = sessionStorage.getItem('userEmail') || 'user@example.com';


    return (
        <section className="border-b-[1px] border-neutral-200 py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Profile</h1>

            <div className="flex items-center gap-3 pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[90px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div>
                    <h3>{userName}</h3>
                    <p className="">{userEmail}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 max-w-[300px] pb-2">
                <p className="font-poppins text-dark-text">Email</p>
                <p>{userEmail}</p>
            </div>

            <div className="grid md:grid-cols-2 max-w-[300px] pb-2">
                <p className="font-poppins text-dark-text">Institution</p>
                <p>Babcock University</p>
            </div>

            <div className="grid md:grid-cols-2 max-w-[300px]">
                <p className="font-poppins text-dark-text">Year</p>
                <p>Junior</p>
            </div>
        </section>
    );
}
 
export default ProfileSetting;