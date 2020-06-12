import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, Form } from "react-bootstrap";
import AddUser from "./AddUser";
import { Link } from "react-router-dom";
import Edit from "./Edit";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Tabs defaultActiveKey="userlist" id="uncontrolled-tab-example">
          <Tab eventKey="userlist" title="User List">
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Employee</th>
            
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">
                      {" "}
                      <Link to={`/Edit/${user.id}`}>{user.firstname}</Link>
                    </th>
                    <td>
                      <Link to={`/Edit/${user.id}`}>{user.lastname}</Link>
                    </td>
                    <td>
                      <Link to={`/Edit/${user.id}`}>{user.age}</Link>
                    </td>
                    <td>
                       <Form.Check type="radio" aria-label="radio 1" to={`/Edit/${user.id}`} />
                      <Link >{user.employee}</Link>
                    </td>
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="userprofile" title="User Profile">
            <AddUser />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
