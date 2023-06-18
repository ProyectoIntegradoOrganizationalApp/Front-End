// ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { Profile } from '../domain/profile/Profile.interface';
import { useUtils } from './useUtils';

interface IDataset { 
    label: string, 
    data: Array<number>, 
    borderColor?: string,
    backgroundColor?: string,
    tension?: number,
    fill?: boolean,
    showLine?: boolean,
    spanGaps?: boolean,
    borderJoinStyle?: "round" | "bevel" | "miter"
}

/**
 *  Custom Hook que exporta funciones para la generación
 *  de gráficas.
 *  @returns 
 */
const useChart = () => {

    // Meses extraídos del hook de utils
    const { getMonths } = useUtils();

    /**
     *  Función que genera los datos necesarios para un LineChart
     *  con los datos que le entran por parámetros.
     * 
     *  @param data 
     *  @returns 
     */
    const lineChart = ( data: Profile ) => {
        // Opciones para la tabla
        const options = {
            responsive: true,
            plugins: {

            },
        };

        // Ponemos los meses en el eje X
        const chartLabels: Array<string> = getMonths();

        // Estos serían los datos de las labels.
        const chartData: { labels: Array<string>, datasets: Array<IDataset> } = {
            labels: chartLabels,
            datasets: []
        }

        // Rellenamos de datos
        if (data?.activity) {
            
            ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

            // Por cada actividad 
            for (let activity of data?.activity) {

                // Buscamos a que proyecto se refiere y si no existe lo asignamos a uno default
                const projectName: string | undefined = data.projects.find(elem => elem.idProject == activity.idProject)?.name;
                const dataLabel: string = projectName ? projectName : "Proyecto";

                // Buscamos en los datos la label y si no existe la creamos
                if (!chartData.datasets.find(elem => elem.label === dataLabel)) {
                    
                    chartData.datasets.push({
                        label: dataLabel,
                        data: [

                        ],
                        borderColor: 'cyan',
                        backgroundColor: 'cyan',
                        showLine: true,
                        spanGaps: true,
                        tension: 0.5,
                        borderJoinStyle: "round"
                    })

                }

                // Buscamos el proyecto
                let item = chartData.datasets.find(elem => elem.label === dataLabel);

                // Si existe ese proyecto, añadimos al array en la posición del mes ese dato.
                if( item ) {
                    let dateIndex = new Date(activity.date).getMonth();
                    item.data[dateIndex] = item.data[dateIndex] ? item.data[dateIndex] + activity.commits : activity.commits;
                }

            }
        }

        return { chartData, options };
    }

    /**
     *  Función que genera los datos necesarios para un BarChart
     *  por meses con los datos que le entran por parámetros.
     * 
     *  @param data 
     *  @returns 
     */
    const barChart = (data: Array<number>) => {

        // Configuración del BarChart
        const barChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            indexAsis: 'y',
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    // ticks: { color: tickColor }
                },
                x: {
                    // ticks: { color: tickColor }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            }
        }

        // Labels del BarChart (meses)
        const chartLabels: Array<string> = [...getMonths()];

        ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

        const barChartData = {
            labels: chartLabels,
            datasets: [
                {
                    label: "Completed",
                    data: [...data],
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        '#046cb2',
                    ]
                },
            ]
        }

        return { barChartOptions, barChartData };
    }

    /**
     *  Función que genera los datos necesario para un PieChart
     *  con los datos que le entran por parámetros.
     * 
     *  @param data 
     *  @returns 
     */
    const pieChart = (data: { completed: number, uncompleted: number }) => {

        // Configuración del PieChart
        const pieChartOptions = {
            responsive: true,
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            }
        };

        // Labels del Pie Chart
        const chartLabels: Array<string> = [
            "Completed",
            "Uncompleted"
        ];

        // Registramos la gráfica y sus elementos
        ChartJS.register(ArcElement, Tooltip, Legend);

        // Generamos el objeto con los datos
        const pieChartData = {
            labels: chartLabels,
            datasets: [
                {
                    label: "Completed",
                    data: [
                        data.completed,
                        data.uncompleted
                    ],
                    backgroundColor: [
                        '#3ea665',
                        'rgba(255, 99, 132)',
                    ]
                },
            ]
        }

        return { pieChartOptions, pieChartData };

    }

    return { lineChart, pieChart, barChart };
}

export default useChart;