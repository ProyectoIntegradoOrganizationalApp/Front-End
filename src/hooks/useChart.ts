// ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { Profile } from '../domain/profile/Profile.interface';
import { useUtils } from './useUtils';

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

        // Este array define las etiquetas del eje x en este caso serían las fechas
        const chartLabels: Array<string> = [
            
        ];

        // Estos serían los datos de las labels.
        const chartData: { labels: Array<string>, datasets: Array<{ label: string, data: Array<number>, borderColor: string, backgroundColor: string}> } = {
            labels: chartLabels,
            datasets: []
        }

        // Rellenamos de datos
        if( data?.activity ) {
            ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

            for( let activity of data?.activity ) {

                const projectName: string | undefined = data.projects.find( elem => elem.idProject == activity.idProject)?.name;
                const dataLabel: string = projectName ? projectName : "Proyecto";

                chartLabels.push(new Date(activity.date).getUTCDate().toString());

                if( !chartData.datasets.find(elem => elem.label === dataLabel) ) {
                    chartData.datasets.push({
                        label: dataLabel,
                        data: [
                            
                        ],
                        borderColor: 'white',
                        backgroundColor: 'cyan'
                    })

                } 

                let item = chartData.datasets.find( elem => elem.label === dataLabel);
                item?.data.push(activity.commits)
                
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
    const barChart = ( data: Array<number> ) => {
    
        // Configuración del BarChart
        const barChartOptions = {
            responsive: true,
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
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
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
    const pieChart = ( data: { completed: number, uncompleted: number } ) => {

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
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                },
            ]
        }

        return { pieChartOptions, pieChartData };

    }
    
    return { lineChart, pieChart, barChart };
}

export default useChart;