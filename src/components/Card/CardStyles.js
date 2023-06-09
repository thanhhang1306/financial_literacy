import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
      userSelect: "none",
      width: "16vw",
      aspectRatio: 2/3,
      borderRadius: "4px",
      background: "#ffffff",
      border: "3px solid #1d384d",
      transition: "0.15s ease-out 0s",
      transformStyle: "preserve-3d",
      transformOrigin: "center right",
      transform: "translateX(5px) translateY(-11px) rotateZ(-1deg)",

      "&:hover": {
        cursor: "pointer",
      }
  },
    
  back: {
    pointerEvents: "none",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",

    "& > img": {
      width: "80%",
      height: "80%",
      opacity: 1,
      transition: "transform 0.2s ease-in-out",
    }
  },

  front: {
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transform: "rotateY(180deg)",
    textAlign: "center",
  }
}));

export default useStyles;