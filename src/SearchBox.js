import React from "react";
import moment from "moment";
import axios from "axios";
import DataTable from "./DataTable";
const SearchBox = () => {
  const [cowinData, setCowinData] = React.useState([]);
  const [pincode, setPinCode] = React.useState("");
  const [date, setDate] = React.useState(moment().format("DD-MM-yyy"));

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`
    );
    setCowinData(res.data.sessions);
    setPinCode("");
    console.log(cowinData);
  };
  return (
    <>
      <form className="container form-control my-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="PIN-CODE"
              className="form-control my-2"
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="01-01-2021"
              className="form-control my-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-success my-2 w-100" onClick={fetchData}>
              Search
            </button>
          </div>
        </div>
      </form>
      <DataTable cowinData={cowinData} />
    </>
  );
};

export default SearchBox;
