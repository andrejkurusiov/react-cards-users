import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      setUsers(response);
    };
    fetchData();
  }, []);

  function handleClick(user, showDetails) {
    if (showDetails) {
      setUser(user);
    } else {
      setUser(null);
    }
  }

  const Card = ({ user }) => {
    return (
      <div>
        <img
          alt=""
          src={`https://robohash.org/${user.id}?200x200`}
          width="50"
          height="50"
        />

        <h3>{user.name}</h3>
        <p style={{ color: "gray", fontStyle: "italic" }}>@{user.username}</p>
        <p>
          <a href={"http://" + user.website}>http://{user.website}</a>
        </p>

        <div>
          <button type="submit" onClick={() => handleClick(user, true)}>
            MORE DETAILS
          </button>
        </div>
      </div>
    );
  };

  const CardList = ({ users }) => {
    return (
      <div class="container">
        {users.map((user, i) => {
          return (
            <Card
              key={i}
              id={users[i].id}
              name={users[i].name}
              username={users[i].username}
              website={users[i].website}
              user={user}
            />
          );
        })}
      </div>
    );
  };

  const Details = ({ user }) => {
    if (user) {
      return (
        <div>
          <div class="container-details">
            <ul>
              <li>name: {user.name}</li>
              <li>username: {user.username}</li>
              <li>email: {user.email}</li>
              <li>phone: {user.phone}</li>
              <li>company: {user.company.name}</li>
              <li>website: {user.website}</li>
              <li>address:</li>
              <ul>
                <li>street: {user.address.street}</li>
                <li>suite: {user.address.suite}</li>
                <li>city: {user.address.city}</li>
                <li>zipcode: {user.address.zipcode}</li>
              </ul>
            </ul>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => handleClick(null, false)}
              style={{ marginTop: "10px" }}
            >
              Back to user cards
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {user == null ? <CardList users={users} /> : null}
      {user != null ? <Details user={user} /> : null}
    </div>
  );
}

export default App;
