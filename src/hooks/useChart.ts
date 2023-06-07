// ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartConf } from '../domain/UI/ChartConf.interface';

const useChart = (conf: ChartConf) => {
    let options = {
        responsive: true,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
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

    let data = {
        labels: conf.labels,
        datasets: [conf.data],
    }

    if (conf.type == "pie") {
        options.plugins.legend.display = false;
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

    return { options, data };
}

export default useChart;