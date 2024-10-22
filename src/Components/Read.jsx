import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://67073c54a0e04071d2298114.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      getData();
    }
  }, [location]);

  const handleDelete = (id) => {
    axios
      .delete(`https://67073c54a0e04071d2298114.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  return (
    <div className="row">
      <div className="mb-2 mt-2">
        <Link to="/create">
          <button className="btn btn-primary">Create Data</button>
        </Link>
      </div>
      <div className="col-md-12">
        <table className="table table-bordered table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>CREATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setDataToStorage(
                            item.id,
                            item.e_name,
                            item.e_age,
                            item.e_email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Are you sure to delete data?"))
                          handleDelete(item.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
