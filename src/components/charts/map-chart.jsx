import { Chart } from 'react-google-charts';

function GenMapCharts({
  data,
  options = {
    backgroundColor: 'transparent',
    colorAxis: { colors: ['#00A5D6'] },
    datalessRegionColor: '#828282',
    defaultColor: '#00A5D6',
    legend: 'none',
  },
}) {
  return (
    <Chart
      chartEvents={[
        {
          eventName: 'select',
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}

export default GenMapCharts;
