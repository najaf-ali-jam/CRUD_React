import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67073c54a0e04071d2298114.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={formSubmit}>
            <div className="form-group">
              <label>Enter Name:</label>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                placeholder="age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <br></br>
            <div className="d-grid">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
