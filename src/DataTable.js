import React from "react";

const DataTable = ({ cowinData }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover mx-3">
        <thead>
          <tr>
            <th scope="col">Center ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Pincode</th>
            <th scope="col">State</th>
            <th scope="col">Vaccine</th>
            <th scope="col">Available Capacity</th>
            <th scope="col">Available Dose 1</th>
            <th scope="col">Available Dose 2</th>
          </tr>
        </thead>
        <tbody>
          {cowinData &&
            cowinData.map((data) => (
              <tr>
                <th scope="row">{data.center_id}</th>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.pincode}</td>
                <td>{data.state_name}</td>
                <td>{data.vaccine}</td>
                <td>{data.available_capacity}</td>
                <td>{data.available_capacity_dose1}</td>
                <td>{data.available_capacity_dose2}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
