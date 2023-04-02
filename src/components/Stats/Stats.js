import "./Stats.css";

function Stats(props) {
  const { value, type, change } = props;
  const arrow =
    change >= 0
    ? "↑" : "↓";
  return (
    <div className="stats-comp">
      <p className={type !== "Debt" ? "green stats-type" : "red stats-type"}>
        {type}
      </p>

      <p className="stats-value">${value}</p>
      <p className={change >= 0 ? " green stat-change" : "red stat-change"}>
        {change}% {arrow}
      </p>
    </div>
  );
}

export default Stats;