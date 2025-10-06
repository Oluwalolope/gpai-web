type props = {
    targetGPA: number | string
}

const GPASnapshotCard = ({targetGPA}: props) => {
    return (
        <section className="bg-white rounded-xl shadow-sm py-4 px-8 col-span-2 w-full md:col-span-1">
            <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">GPA Snapshot</h2>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-poppins text-slate-400">Current GPA</h3>
                    <p className="text-5xl font-bold font-poppins text-dark-text py-3">3.65</p>
                    <p className="text-xl font-poppins text-slate-400">Semester</p>
                </div>

                {targetGPA && 
                    <div>
                        <h3 className="text-xl font-poppins text-slate-400">Target</h3>
                        <p className="text-5xl font-bold font-poppins text-dark-text py-3">{targetGPA}</p>
                        <p className="text-xl font-poppins text-slate-400">August '25</p>
                    </div> 
                }
            </div>
        </section>
    );
}
 
export default GPASnapshotCard;