const StudyScheduleCard = () => {
    return (
        <section className="bg-white rounded-xl shadow-sm py-4 px-8 md:col-span-1 md:mb-8">
            <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">Tasks & Reminders</h2>
            <ul>
                <li className="list-disc text-xl text-slate-700">Math assignment</li>
                <li className="list-disc text-xl text-slate-700">Physics quiz</li>
            </ul>
        </section>
    );
}
 
export default StudyScheduleCard;