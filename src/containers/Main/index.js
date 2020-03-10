import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/Card";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const [data, setData] = useState([]),
    [searchData, setSearchData] = useState([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    [requestFilter, setRequest] = useState(""),
    [clientFilter, setClient] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://www.mocky.io/v2/5e6774e73100008500230960")
      .then(res => {
        setData(res.data);
        setSearchData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const onRequestFilterChange = event => {
    const value = event.target.value;
    setRequest(value);
    setSearchData(
      data.filter(item =>
        item.number.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  const onClientFilterChange = event => {
    const value = event.target.value;
    setClient(value);
    setSearchData(
      data.filter(item =>
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
        {searchData &&
          searchData.map(item => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Main;
