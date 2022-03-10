import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard/UserCard";
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const user = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/srijanDubey/chitkara-test-api-mock/main/data.json"
      );
      const { data } = await response.json();
      setUsers(data);
      console.log(data);
    };
    user();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default App;
