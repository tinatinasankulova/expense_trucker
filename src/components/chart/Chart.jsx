import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartDataPointValue = props.dataPoint.map((data) => data.value);
  const totalMax = Math.max(...chartDataPointValue);

  return (
    <div className="chart">
      {props.dataPoint.map((data) => {
        return (
          <ChartBar
            key={data.label}
            label={data.label}
            value={data.value}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;
