import { ChartData } from "./ChartData.interface"

export interface ChartConf {
    type: string,
    labels?: Array<string>
    data: ChartData
}