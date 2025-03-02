import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
interface BarChartProps {
    horizontal?: boolean,
    data_1: number[],
    data_2: number[],
    title_1: string,
    title_2: string,
    bgColor_1: string,
    bgColor_2: string,
    labels?: string[]
}

//bar chart
export const ChartBar = ({
    horizontal = false,
    title_1,
    title_2,
    data_1 = [],
    data_2 = [],
    bgColor_1,
    bgColor_2,
    labels = months
}: BarChartProps) => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    };
    const data: ChartData<'bar', number[], string> = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
        ],
    };
    return <Bar options={options} data={data} />
}
interface DoughnutChartProps {
    data: number[],
    backgroundColor: string[],
    labels?: string[],
    offset?: number[],
    cutout?: string | number,
    legends?: boolean
}

//doughnt chart
export const DoughnutChart = ({ data, backgroundColor, labels, offset, cutout, legends }: DoughnutChartProps) => {
    const doughnutOption: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: 'bottom',
                labels: {
                    padding: 40
                },
            }
        },
        cutout
    }
    const doughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [
            {
                borderWidth: 0,
                backgroundColor,
                data,
                offset,
            },
        ]
    }
    return <Doughnut options={doughnutOption} data={doughnutData} />
}


