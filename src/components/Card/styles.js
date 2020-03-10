import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  additionalData: {
    position: "absolute",
    width: "100%",
    display: "none",
    top: "100%",
    zIndex: 2,
    backgroundColor: "#fff",
    boxShadow: "0px 8px 8px 0px gray"
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 15,
    flex: "1 0 280px",
    maxWidth: 300,
    margin: ".5rem .5em",
    padding: "20px 0px",
    "&:hover": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      boxShadow: "0px 5px 5px 0px gray"
    },
    "&:hover $additionalData": {
      display: "block",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }
  },
  cardContent: {
    padding: "0px 10px "
  },
  taskName: {
    fontWeight: "bold",
    marginBottom: 10
  },
  price: {
    marginBottom: 10
  },
  clientName: {
    marginBottom: 10,
    fontSize: 14
  },
  id: {
    marginBottom: 10,
    fontSize: 12,
    color: "#aaa"
  },
  dateRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  number: {
    marginRight: 30,
    fontSize: 12,
    color: "#aaa"
  },
  date: {
    fontSize: 12,
    color: "#aaa"
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "0px 20px"
  },
  tag: {
    backgroundColor: "#C5C7DD",
    height: 24,
    borderRadius: 12,
    fontSize: 12,
    color: "#fff",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    padding: "0px 20px",
    textTransform: "uppercase",
    marginBottom: 10
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    height: 45,
    backgroundColor: "#EAECF5",
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 10
  }
});

export default useStyles;
