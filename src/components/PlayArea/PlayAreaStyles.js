import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  playAreaContainer: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "60%",
    borderRight: "3px solid rgba(29, 56, 77, 1)"
    // backgroundImage: "radial-gradient(#374b5c 1px, transparent 2px)",
    // backgroundSize: "60px 60px",
  },

  header: {
    fontSize: "3rem",
    padding: "0.5rem",
    textHeight: "1.5rem !important",
    backgroundColor: "#fefefe",
    // borderBottom: "2px solid rgba(29, 56, 77, 1)"
    boxShadow: "0 0 1px 1px rgba(29, 56, 77, 1)",
  },

  typography: {
    fontFamily: "Montserrat !important",
    fontSize: "inherit !important",
    letterSpacing: "0.5rem !important",
  },

  cardsContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    perspective: "1000px",

    "& > div:nth-of-type(n+2)": {
      zIndex: -1,
      position: "absolute",
    },
    "& > div:nth-of-type(2)": {
      transform: "rotateZ(3deg)",
      boxShadow: "1px 1px 10px 4px rgba(0, 0, 0, 0.2)"
    },
    "& > div:nth-of-type(3)": {
      transform: "translateX(-2px) rotateZ(5deg)",
    }
  }

}));

export default useStyles;