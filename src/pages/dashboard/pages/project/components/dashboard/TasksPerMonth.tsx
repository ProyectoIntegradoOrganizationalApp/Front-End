import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import useChart from "../../../../../../hooks/useChart";
import { ChartConf } from "../../../../../../domain/UI/ChartConf.interface";

export const TasksPerMonth: React.FC<{ chartConf: ChartConf }> = ({ chartConf }) => {
    const { data, options } = useChart(chartConf);

    return (
        <Bar height={0.2} data={data} options={options} />
    )
}