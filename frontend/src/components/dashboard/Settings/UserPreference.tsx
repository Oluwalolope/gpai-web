const UserPreference = () => {
    return (
        <section className="rounded-xl border shadow-sm md:shadow-lg border-neutral-200 bg-white px-4 py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Preferences</h1>

            {/* Theme */}
            <div className="flex flex-col gap-4  pb-2">
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
            <div className="flex flex-col pt-2 gap-2">
                <p className="font-poppins text-dark-text">Language</p>
                <select name="language" id="language" className="cursor-pointer px-3 py-2 flex-1 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary">
                    <option value="English">English</option>
                </select>
            </div>

        </section>
    );
}
 
export default UserPreference;