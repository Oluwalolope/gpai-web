const GPASnapshotCard = () => {
    return (
        <section className="bg-white rounded-xl shadow-sm py-4 px-8 md:col-span-1 md:mt-8">
            <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">GPA Snapshot</h2>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-poppins text-slate-400">Current GPA</h3>
                    <p className="text-5xl font-bold font-poppins text-dark-text py-3">3.65</p>
                    <p className="text-xl font-poppins text-slate-400">Semester</p>
                </div>

                <div>
                    <h3 className="text-xl font-poppins text-slate-400">Target</h3>
                    <p className="text-5xl font-bold font-poppins text-dark-text py-3">4.20</p>
                    <p className="text-xl font-poppins text-slate-400">August '25</p>
                </div>
            </div>
        </section>
    );
}
 
export default GPASnapshotCard;