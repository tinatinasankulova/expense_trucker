import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeigh = "%";
  if (props.maxValue > 0) {
    barFillHeigh = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeigh }}></div>
      </div>
      <label className="chart-bar__label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
