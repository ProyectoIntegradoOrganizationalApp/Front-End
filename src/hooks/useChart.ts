// ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartConf } from '../domain/UI/ChartConf.interface';
import { useInterfaceMode } from './useInterfaceMode';

const useChart = (conf: ChartConf) => {
    const { isDarkMode } = useInterfaceMode();
    const tickColor = isDarkMode ? 'white' : 'black';

    let data = {
        labels: conf.labels,
        datasets: [conf.data],
    }

    let options = {
        mantainAspectRatio: true,
        responsive: true,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        scales: {},
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const label = context.label || '';

                        if (label) {
                            return ' ' + label + ': ' + context.raw;
                        }

                        return '';
                    },
                },
            }
        }
    };

    if (!conf.labels || conf.type == "pie" || conf.type == "bar") {
        options.plugins.legend.display = false;
    }
    if (conf.type == "line") {
        options.scales = {
            y: {
                beginAtZero: true,
                ticks: { color: tickColor }
            },
            x: {
                ticks: { color: tickColor }
            }
        }
    }
    if (conf.type == "bar") {
        (options as any).indexAxis = "y";
        options.scales = {
            y: {
                beginAtZero: true,
                ticks: { color: tickColor }
            },
            x: {
                ticks: { color: tickColor }
            }
        }
    }

    // function line() {
    //     // Opciones para la tabla
    //     const options = conf.options;

    //     const data = {
    //         labels: conf.labels
    //     }

    //     // Este array define las etiquetas del eje x en este caso serían las fechas
    //     const chartLabels: Array<string> = [

    //     ];

    //     // Estos serían los datos de las labels.
    //     const chartData: { labels: Array<string>, datasets: Array<{ label: string, data: Array<number>, borderColor: string, backgroundColor: string }> } = {
    //         labels: chartLabels,
    //         datasets: []
    //     }

    //     // Rellenamos de datos
    //     if (data?.activity) {
    //         ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    //         for (let activity of data?.activity) {

    //             const projectName: string | undefined = data.projects.find(elem => elem.id == activity.idProject)?.name;
    //             const dataLabel: string = projectName ? projectName : "Proyecto";

    //             chartLabels.push(new Date(activity.date).getUTCDate().toString());

    //             if (!chartData.datasets.find(elem => elem.label === dataLabel)) {
    //                 chartData.datasets.push({
    //                     label: dataLabel,
    //                     data: [

    //                     ],
    //                     borderColor: 'white',
    //                     backgroundColor: 'cyan'
    //                 })

    //             }

    //             let item = chartData.datasets.find(elem => elem.label === dataLabel);
    //             item?.data.push(activity.commits)

    //         }
    //     }
    //     return [options, data];
    // }

    return { data, options };
}

export default useChart;