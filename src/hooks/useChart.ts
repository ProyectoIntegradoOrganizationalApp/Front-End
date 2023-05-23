// ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Profile } from '../domain/profile/Profile.interface';

const useChart = ( data: Profile ) => {

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
    const chartData: {labels: Array<string>, datasets: Array<{ label: string, data: Array<number>, borderColor: string, backgroundColor: string}> } = {
        labels: chartLabels,
        datasets: []
    }

    // Rellenamos de datos
    if( data?.activity ) {
        ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

        for( let activity of data?.activity ) {

            const projectName: string | undefined = data.projects.find( elem => elem.id == activity.idProject)?.name;
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

    return { options, chartData };
}

export default useChart;