import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  statsAreaContainer: {
    flexBasis: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    rowGap: "0.5rem",
    backgroundColor: "#ffffff",
  }
}));

export default useStyles;