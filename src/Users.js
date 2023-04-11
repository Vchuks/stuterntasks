import React, { useState } from "react";
import userList from "./UsersList";
import UserCard from "./UserCard";
import Input from "./Input";

const Users = () => {
  const users = userList.map((list) => {
    return (
      <UserCard
        key={list.id}
        id={list.id}
        title={list.title}
        lastName={list.lastName}
        firstName={list.firstName}
        picture={list.picture}
      />
    );
  });
  const [user, setUser] = useState(users);
  // const [update, setUpdate] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleUser = (event) => {
    if (event.key === "Enter") {
      const users = userList
        .map((list) => {
          return (
            <UserCard
              key={list.id}
              id={list.id}
              title={list.title}
              lastName={list.lastName}
              firstName={list.firstName}
              picture={list.picture}
            />
          );
        })
        .filter((name) => name.props.firstName === input);
      setUser(users);
    } else {
      setUser(user);
    }
  };
  return (
    <div className="container">
      <Input
        value={input}
        handleChange={handleChange}
        handleUpdate={handleUser}
      />
      {user}
    </div>
  );
};

export default Users;
