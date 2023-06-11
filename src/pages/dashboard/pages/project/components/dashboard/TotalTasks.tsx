import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import useChart from "../../../../../../hooks/useChart";
import { ChartConf } from "../../../../../../domain/UI/ChartConf.interface";

export const TotalTasks: React.FC<{ chartConf: ChartConf }> = ({ chartConf }) => {
    const { data, options } = useChart(chartConf);

    return (
        <Pie data={data} options={options} />
    )
}