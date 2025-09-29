import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    scales
} from 'chart.js';
    
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

const LineChartData = {
    labels: [
        '100L 1st', 
        '100L 2nd', 
        '200L 1st', 
        '200L 2nd', 
        '300L 1st', 
        '300L 2nd', 
        '400L 1st',
        '400L 2nd'
    ],
    datasets: [
        {
            label: "CGPA",
            data: [
                3.24, 
                3.62, 
                3.97, 
                4.00, 
                4.17, 
                4.33, 
                4.38,
                4.50
            ],
            borderColor: "#1E88E5",
        },
    ]
}

const LineGraph  = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: "bottom"
            },
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