import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js';
import { calculateGPAForCourses, getSemesterData } from '../../util/calculations';
import { useContext } from 'react';
import UserDashboardContext from '../../../../store/UserDashboardContext';
    
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend 
);

const gpaScale = 5;



const LineGraph  = () => {
    const userDashboardCtx = useContext(UserDashboardContext);
    
    const { semesterNames, cumulativeCourses } = getSemesterData(userDashboardCtx.courseHistory);
    const cumulativeGPAs = cumulativeCourses.map(courses => calculateGPAForCourses(courses));


    const LineChartData = {
        labels: semesterNames,
        datasets: [
            {
                label: "CGPA",
                data: cumulativeGPAs,
                borderColor: "#1E88E5",
            },
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Cumulative Grade Point Average per semester'
            }
        },
        scale: {
            y: {
                max: gpaScale
            }
        }
    };

    const data = LineChartData;

    return (
        <>
           <Line options={options} data={data}/> 
        </>
    );
};
export default LineGraph;