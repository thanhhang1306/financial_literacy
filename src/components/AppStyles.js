import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",  
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "#f7f8fc"
  }
}));

export default useStyles;