const AcademicSetting = () => {
    return (
        <section className="py-6">
            <h1 className="text-2xl font-bold font-poppins text-dark-text pb-4">Academic</h1>

            {/* Academic */}
            <div>
                <div className="pb-3">
                    <p className="font-poppins text-dark-text pb-2">Grading Scale</p>
                    <select name="gradingScale" id="gradingScale" className="cursor-pointer border border-black w-full p-1 rounded-sm">
                        <option value="4">4.0 Scale</option>
                        <option value="5">5.0 Scale</option>
                        <option value="7">7.0 Scale</option>
                        <option value="10">10.0 Scale</option>
                        <option value="letter">Letter</option>
                    </select>
                </div>

                <div>
                    <p className="font-poppins text-dark-text pb-2">Target GPA</p>
                    <input type="text" placeholder="5.0" className="cursor-pointer border border-black w-full p-1 rounded-sm"   />
                </div>

            </div>

        </section>
    );
}
 
export default AcademicSetting;