import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  summaryContainer: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "90%",
    border: "3px solid rgba(29, 56, 77, 1)",
    backgroundColor: "#ffffff",
    transition: "transform 0.9s ease-out",
    transform: "translateY(120%)",
    textAlign: "center",
  },

  firstColumn: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& > div": {
      flexGrow: 0.2,
    }
  },

  secondColumn: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& > div": {
      flexGrow: 0.2,
    },
    "& > button": {
      width: "50%",
      margin: "0 auto",
      height: "2rem",
    }
  },

  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& > div": {
      flexGrow: 0.2,
    }
  }
}));

export default useStyles;