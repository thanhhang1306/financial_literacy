import Info from "./Info";
import Stats from "./Stats";
import "./TopBox.css";

function TopBox() {
  return (
    <div className="app-container">
      <Info name="John Doe" networth="1000" spending="-5000" />
      <div className="stats-container">
        <Stats value={100} type="Salary" change="10" />
        <Stats value={200} type="Savings" change="20" />
        <Stats value={200} type="Investment" change="-0.5" />
        <Stats value={1000} type="Debt" change="-0.5" />
      </div>
    </div>
  );
}

export default TopBox;
