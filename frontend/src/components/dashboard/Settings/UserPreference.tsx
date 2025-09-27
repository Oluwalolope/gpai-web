const UserPreference = () => {
    return (
        <section className="border-b-[1px] border-neutral-200 py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Preferences</h1>

            {/* Theme */}
            <div className="flex flex-col gap-4 md:flex-row pb-2">
                <h3 className="font-poppins">Theme</h3>
                <div className="flex gap-3 flex-wrap">
                    <label className="cursor-pointer">
                        <input type="radio" name="theme" id="theme" value="light" className="me-2" />
                        Light
                    </label>
                    <label className="cursor-pointer">
                        <input type="radio" name="theme" id="theme" value="dark" className="me-2" />
                        Dark
                    </label>
                    <label className="cursor-pointer">
                        <input type="radio" name="theme" id="theme" value="system" className="me-2" />
                        System Default
                    </label>
                </div>
            </div>

            {/* Language */}
            <div className="flex justify-between pt-2">
                <p className="font-poppins text-dark-text">Language</p>
                <select name="language" id="language" className="cursor-pointer border border-black">
                    <option value="English">English</option>
                </select>
            </div>

        </section>
    );
}
 
export default UserPreference;