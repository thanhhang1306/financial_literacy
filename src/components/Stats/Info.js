import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./Info.css";

function Info(props) {
  const { name, networth, spending } = props;

  return (
    <div className="info-container">
      <div className="info-text">
        <p className="name">{name}</p>
        <p className={networth >= 0 ? "high" : "low"}>Net Worth: ${networth}</p>
        <p className={spending >= 0 ? "high" : "low"}>
          Discretionary Spending: ${spending}
        </p>
      </div>
    </div>
  );
}

export default Info;
