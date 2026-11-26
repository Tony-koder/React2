import { useState } from "react";
import {mockData} from "../data/data.js";

export default function Users() {
    const [userData, setUserData] = useState(mockData);
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");

    const addUser = () => {
        const newUser = { username: userName, email: email};
        setUserData([...userData, newUser]);
        setUserName("");
        setEmail("");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addUser();
    }
  return (
    <>
      <h2>Users</h2>
      <form onSubmit={onSubmit} action="">
        <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name" />
        <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
         />
         <button>Add</button>
      </form>

      {userData.map((user, i) => (
        <div key={i}>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
}