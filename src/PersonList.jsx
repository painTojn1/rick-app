import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res.data[1].email);
      setPersons(res.data);
    });
  }, []);

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
export default PersonList;
