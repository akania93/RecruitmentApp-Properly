export interface ChartData {
  chartLabel: string;
  axisXLabels: Array<string>;
  linesData: Array<Array<number>>;
  legend: Array<string>;
}

export interface AggregatedChartData extends ChartData {
  aggregatedData: Array<ChartSummary>;
}

export interface ChartSummary {
  title: string;
  value: number;
}
