import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/members");
    setUsers(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {users.map((u: any) => (
        <h4 key={u._id}>username: {u.username}</h4>
      ))}
    </div>
  );
};

export default App;
