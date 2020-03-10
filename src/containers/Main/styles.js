import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    backgroundColor: "#ddd",
    minHeight: "100vh",
    flexDirection: "column",
    padding: "15px"
  },
  filtersRow: {
    display: "flex",
    flexDirection: "row"
  },
  filterDiv: {
    display: "flex",
    backgroundColor: "#fff",
    border: "#bbb 1px solid",
    borderRadius: 15,
    height: "40px",
    padding: "0px 15px",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  filterText: {
    marginLeft: 10,
    color: "#777"
  },
  dataContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20
  },
  input: {
    border: 0,
    width: 150,
    marginLeft: 5
  }
});

export default useStyles;
