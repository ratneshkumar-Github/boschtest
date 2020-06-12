import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age:"",
    Address1: "",
    Address2: "",
    city: "",
  });

  const { firstname, lastname, email, age, address1, address2, city } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="mx-auto shadow p-5">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg border--d"
                  placeholder="First Name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg border--d"
                  placeholder="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg border--d"
                  placeholder="E-mail Address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg border--d"
                  placeholder="Age"
                  name="age"
                  value={age}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg border--d"
                  placeholder="address2"
                  name="address2"
                  value={address2}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg border--d"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4">
              <button className="btn btn-primary btn-block">submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
