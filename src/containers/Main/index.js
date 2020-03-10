import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { getTasks } from "../../redux/actions/tasks";
import Card from "../../components/Card";
import useStyles from "./styles";

const Main = props => {
  const classes = useStyles();
  const [requestFilter, setRequest] = useState(""),
    [clientFilter, setClient] = useState(""),
    [searchData, setSearchData] = useState([]);

  useEffect(() => {
    props.getTasks(data => setSearchData(data));
  }, []);

  const onRequestFilterChange = event => {
    const value = event.target.value;
    setRequest(value);
    setSearchData(
      props.data.filter(item =>
        item.number.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  const onClientFilterChange = event => {
    const value = event.target.value;
    setClient(value);
    setSearchData(
      props.data.filter(item =>
        item.client.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.filtersRow}>
        <div className={classes.filterDiv}>
          <FaSearch color="#bbb" size={14} />
          <input
            type="text"
            value={requestFilter}
            onChange={onRequestFilterChange}
            placeholder="Номер заявки"
            className={classes.input}
          />
        </div>
        <div className={classes.filterDiv}>
          <FaSearch color="#bbb" size={14} />
          <input
            type="text"
            value={clientFilter}
            onChange={onClientFilterChange}
            placeholder="Наименование клиента"
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.dataContainer}>
        {searchData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks: { data, loading, error } }) => ({
  data,
  loading,
  error
});

const mapDispatchToProps = {
  getTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
