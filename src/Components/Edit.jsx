import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://67073c54a0e04071d2298114.mockapi.io/crud/${id}`, {
        name: name,
        age: age,
        email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Edit Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Edit Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="age"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                FonChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="form-control"
              ></input>
            </div>
            <br></br>
            <div className="d-grid">
              <input
                type="submit"
                value="Edit"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          {name}
          <br></br>
          {age}
          <br></br>
          {email}
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Edit;
