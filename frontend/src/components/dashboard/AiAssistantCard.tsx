const AiAssistantCard = () => {
    return (
        <section className="bg-white rounded-xl shadow-sm py-4 px-8 w-full col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">AI Assistant</h2>
            <div className="bg-slate-200 rounded-md h-[40%] overflow-y-scroll mb-4 p-1">
                <p>Hi User, based on last semester's result, focus on Calculus and Thermodynamics</p>
            </div>
            <input type="text" placeholder="Type a message..." className="bg-slate-100 w-full border border-slate-200 rounded-md h-[][30%] p-1" />
        </section>
    );
}
 
export default AiAssistantCard;