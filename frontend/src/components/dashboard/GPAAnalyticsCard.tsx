import LineGraph from "./graph/LineGraph";

const GPAAnalyticsCard = () => {
    return (
        <section className="bg-white rounded-xl shadow-sm py-4 px-8 md:col-span-1 md:mb-8">
            <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">GPA Trend</h2>
            {/* Put a graph item to show the trend here */}
            <LineGraph />
        </section>
    );
}
 
export default GPAAnalyticsCard;