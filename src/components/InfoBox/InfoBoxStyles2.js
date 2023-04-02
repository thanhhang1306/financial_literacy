import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  infoBoxContainer: {
    display: "flex",
    flexDirection: "column",
    height: "26vh",
    margin: "0.5rem",
    // border: "1.5px solid black",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    // border: "3px solid #1d384d",
    // boxShadow: "0 0 8px 0 rgba(29, 56, 77, 1)",
    fontSize: "1.5rem"
  },

  header: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "60%",
    width: "100%",
    height: "10%",
    margin: "0.5rem",
    
    "& > h6 > span": {
      display: "inline-block !important",
      marginLeft: "1.5rem !important",
      // border: "1px solid black !important",
      borderRadius: "0.5rem !important",
      fontFamily: "Montserrat !important",
      fontSize: "inherit !important",
      fontWeight: "bold"
    },
    "& > span": {
      fontFamily: "Montserrat !important",
      padding: "0.4rem 0.4rem !important",
      fontSize: "1rem !important",
      fontWeight: "bold"
    }
  },

  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  }
}));

export default useStyles;